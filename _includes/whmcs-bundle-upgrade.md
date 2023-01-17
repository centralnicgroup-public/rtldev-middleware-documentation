**When upgrading: Please make sure to back-up your existing CNIC bundle to prevent any data losses.**

1. Backup folders to a safe path 
    * `modules/registrars/ispapi`
    * `modules/registrars/cnic`
    * `modules/addons/cnicdns`
    * `modules/addons/cnicdomainimport`
    * `modules/addons/cnicmigration`
    * `modules/addons/cnicssl_addon`
    * `modules/addons/ispapidomaincheck`
    * `modules/servers/cnicssl`
    * `modules/widgets/ispapi*.php // just delete these ones if present`
    * `modules/widgets/hexonet_summary.php // just delete this one if present`
    * `resources/cnic` 
    
    And then delete these folders from your WHMCS instance.

2. Extract the zip archive into the root folder of your WHMCS instance. (Upgrade completed! :tada:)
<hr>
**IMPORTANT** Ensure to read the [Release Notes](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/releases) carefully before Upgrading! Our Release numbers follow [semantic versioning](https://semver.org/) and thus we follow the version syntax: MAJOR.MINOR.PATCH. Please ensure to backup your current version's folder to have a fallback possibility you can use, just in case there's something wrong with our new version.

![Semantic Versioning]({{ 'assets/images/semver.png' | relative_url }})

You can always upgrade without worries if the PATCH or MINOR version have just changed.
If the MAJOR version has changed, check the release notes to avoid unexpected issues as a new MAJOR version comes always with breaking changes or at least with a new module behavior.

Follow the installations steps below and consider the provided release notes for the MAJOR version upgrade. In detail: if you're upgrading from 1.x.y to 4.x.y, ensure to check **ALL Major Version Release Notes** up to the version you're upgrading too. In this example, check the release notes for 2.0.0, 3.0.0 and 4.0.0.

If you're upgrading regularly and keeping all our modules / addons / widgets updated, you run in less upgrade effort than doing multiple major version number steps. You can add/subscribe yourself to release notifications in our github repositories to get informed about new releases.