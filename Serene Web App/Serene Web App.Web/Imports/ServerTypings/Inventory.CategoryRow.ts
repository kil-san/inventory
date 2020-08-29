﻿namespace Serene_Web_App.Inventory {
    export interface CategoryRow {
        CategoryId?: number;
        Name?: string;
        UpdateUserId?: number;
        UpdateUsername?: string;
        UpdateDate?: string;
        InsertUserId?: number;
        InsertUsername?: string;
        InsertDate?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Category';
        export const lookupKey = 'Inventory.Category';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('Inventory.Category');
        }
        export const deletePermission = 'Administrator:SuppliersAdm';
        export const insertPermission = 'Administrator:SuppliersAdm';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administrator:SuppliersAdm';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            Name = "Name",
            UpdateUserId = "UpdateUserId",
            UpdateUsername = "UpdateUsername",
            UpdateDate = "UpdateDate",
            InsertUserId = "InsertUserId",
            InsertUsername = "InsertUsername",
            InsertDate = "InsertDate"
        }
    }
}
