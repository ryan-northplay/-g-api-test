// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma.js';
import { PrismaClient, Prisma } from '@prisma/client'

export function formatThousandsIndexOf2(n, dp){
  var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
      i = s.lastIndexOf('.'), j = i == -1 ? l : i,
      r = e, d = s.substr(j+1, dp);
  while ( (j-=3) > b ) { r = ',' + s.substr(j, 3) + r; }
  return s.substr(0, j + 3) + r + 
    (dp ? '.' + d + ( d.length < dp ? 
      ('00000').substr(0, dp - d.length):e):e);
};


export function maxTestStartBal(){
  return 25;
};

export async function getBalance(loginUser, ckey, res) {
    const loginRegex =  /^[a-zA-Z0-9_]*/gi;
    
    if(loginUser.length < 16) {
      return res.status(400).json({ status: 'fail', msg: 'minimum chars must be 16 or higher for the login field', error: 'user_not_found' });
    }
    if(loginUser.length > 64) {
      return res.status(400).json({ status: 'fail', msg: 'chars must be 64 or lower for the login field', error: 'user_not_found' });
    }

    if (!loginRegex.test(loginUser)) {
      return res.status(400).json({ status: 'fail', msg: 'alphanumeric only for login', error: 'user_not_found' });
    }
   
    let selectData = await prisma.balance.findFirst({
      where: {
        login: loginUser,
        securekey: ckey,
      },
    });

    if(!selectData) {
      let startbalance = new Prisma.Decimal(0.00);
      if (ckey.indexOf('TEST_STARBAL') > -1) {
        let replaced = ckey.replace("TEST_STARBAL-", "");
          if(replaced < (maxTestStartBal() + 1)) {
            if(replaced > 1) {
            startbalance = new Prisma.Decimal(formatThousandsIndexOf2(replaced, 2));
            }
        }
      }
      
      try {
        selectData = await prisma.balance.create({
        data: {
          securekey: ckey,
          login: loginUser,
          balance: startbalance,
        },
      });

      } catch(err) {
        return res.status(400).json({ status: 'fail', error: 'db_error' });
      }
    }

    try {
    let finalResponseData = {};
    finalResponseData.status = "success";
    finalResponseData.error = "";
    finalResponseData.login = selectData.login;
    finalResponseData.balance = formatThousandsIndexOf2((selectData.balance.toString()), 2);
    
    return res.status(200).json(finalResponseData);
    } catch(err) {
      return res.status(400).json({ status: 'fail', error: err.message });
    }
}

export async function writeBet(winLostAmount, loginUser, ckey, res) {
  const loginRegex =  /^[a-zA-Z0-9_]*/gi;
  
  if(loginUser.length < 16) {
    return res.status(400).json({ status: 'fail', msg: 'minimum chars must be 16 or higher for the login field', error: 'user_not_found' });
  }
  if(loginUser.length > 64) {
    return res.status(400).json({ status: 'fail', msg: 'chars must be 64 or lower for the login field', error: 'user_not_found' });
  }

  if (!loginRegex.test(loginUser)) {
    return res.status(400).json({ status: 'fail', msg: 'alphanumeric only for login', error: 'user_not_found' });
  }
 
  let selectData = await prisma.balance.findFirst({
    where: {
      login: loginUser,
      securekey: ckey,
    },
  });

  if(!selectData) {
    return res.status(400).json({ status: 'fail', error: 'user_not_found' });
  }
  if(selectData) {
    let amount = await winLostAmount.toString();

    if (winLostAmount < 0) {
      var deductedFinalAmount = (new Prisma.Decimal(formatThousandsIndexOf2(((await Number(selectData.balance)) - (await Number(formatThousandsIndexOf2(( await amount.replace("-", "")), 2)))), 2)));
      if(deductedFinalAmount < 0) {
        return res.status(400).json({ status: 'fail', error: 'fail_balance' });
      }
      return await prisma.balance.updateMany({
        where: {
          id: selectData.id,
        },
        data: {
          balance: deductedFinalAmount,
        },
      }).then(e => getBalance(loginUser, ckey, res));
    } else {
      if(winLostAmount !== 0) {
        return await prisma.balance.updateMany({
          where: {
            id: selectData.id,
          },
          data: {
            balance: (new Prisma.Decimal(formatThousandsIndexOf2(((await Number(selectData.balance)) + winLostAmount), 2))),
          },
        }).then(e => getBalance(loginUser, ckey, res));
      } else {
        return await getBalance(loginUser, ckey, res);
      }
    }
  }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
      /*
      const { l } = req.query;
      const { ck } = req.query;
      if(!l) {
        return res.status(400).json({ status: 'fail', error: 'missing_l_query' });
      }
      if(!ck) {
        return res.status(400).json({ status: 'fail', error: 'missing_ck_query' });
      }
      return await getBalance(l, ck, res);
      */
      return res.status(400).json({ status: 'fail', error: 'wrong_method' });
    } else {
    if(req.method === "POST") {
      
      console.log(req.body);
      let newB = JSON.stringify(req.body);
      let finalB = JSON.parse(newB);
      let cmd = finalB.cmd;
      let login = finalB.login;
      let ckey = finalB.key;

      if(cmd === "getBalance") {
        return getBalance(login, ckey, res);
      }
      if(cmd === "writeBet") {
        return await writeBet(finalB.winLose, login, ckey, res);
      }

    }
  }
}
