import React from 'react';

import URLS from "./urls";
const TransforMoneyAccount = React.lazy(() => import('../pages/account/transferMoney'));
const Account = React.lazy(() => import('../pages/account'));
const AddAccount = React.lazy(()=> import('../pages/account/addAccount'));


const routes = [
    { path : URLS.account.index , exact:true, name:"Account", component:Account },
    { path : URLS.account.add , exact: true, name:"AddAccount", component:AddAccount},
    { path : URLS.account.transferMoney , exact:true, name:"TransferMonyAccount", component:TransforMoneyAccount }

]

export default routes;