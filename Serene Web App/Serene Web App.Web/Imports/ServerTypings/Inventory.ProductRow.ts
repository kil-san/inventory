﻿namespace Serene_Web_App.Inventory {
    export interface ProductRow {
        ProductId?: number;
        Name?: string;
        Quantity?: number;
        Unit?: number;
        Price?: number;
        CategoryId?: number;
        CategoryName?: string;
        SupplierId?: number;
        SupplierName?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Product';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProductId = "ProductId",
            Name = "Name",
            Quantity = "Quantity",
            Unit = "Unit",
            Price = "Price",
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            SupplierId = "SupplierId",
            SupplierName = "SupplierName"
        }
    }
}