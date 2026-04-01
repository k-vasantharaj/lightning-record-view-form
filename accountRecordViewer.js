import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountViewForm extends LightningElement {

    @api recordId;

    objectApiName = ACCOUNT_OBJECT;

    fields = [
        NAME_FIELD,
        PHONE_FIELD,
        INDUSTRY_FIELD,
        TYPE_FIELD,
        WEBSITE_FIELD
    ];
}
