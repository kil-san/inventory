﻿namespace Serene_Web_App.Inventory {
    export interface CustomerForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        SupplierId: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.PasswordEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(CustomerForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Email', w1,
                    'UserImage', w2,
                    'Password', w3,
                    'PasswordConfirm', w3,
                    'Source', w0,
                    'SupplierId', w4,
                    'Phone', w0,
                    'Address', w0
                ]);
            }
        }
    }
}
