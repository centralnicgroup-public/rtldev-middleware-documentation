- **Illegal mix of collations** error when opening the addon in the WHMCS Admin Area.
  This can happen on older WHMCS installations where database updates between WHMCS upgrades did not go smoothly, leaving some tables in a different collation.
  To solve this issue, it is necessary to convert the affected tables to the correct default collation, with a command like this:

  ```sql
  ALTER TABLE tblexample CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
  ```

  Where `tblexample` should be replaced by the affected table.
  **IMPORTANT**: please backup your database befor making any changes!
  More information can be found in [this WHMCS article](https://help.whmcs.com/m/updating/l/1040457-troubleshooting-a-blank-admin-dashboard-after-updating)
