### Dashboard Widget

{% capture logo %}assets/images/whmcs/cnic-dashboard-widget/{{ page.grand_parent | downcase | replace: " ", ""}}.jpg{% endcapture %}
{% capture upgrade-logo %}assets/images/whmcs/cnic-dashboard-widget/upgrade-{{ page.grand_parent | downcase | replace: " ", "" }}.jpg{% endcapture %}

![{{ page.grand_parent }} Dashboard Widget]({{ logo | relative_url }})

On the left, you'll get your account balance displayed, and on the right, if you see the message "*You're running with the latest version.*", then you are running the latest release, You can also verify your current version on the bottom right of your widget e.g. "*Current version x.y.z.*".

![{{ page.grand_parent }} Dashboard Widget]({{ upgrade-logo | relative_url }})

Otherwise, we suggest upgrading. Click on the button "*Latest version x.y.z available!*" to download the latest module release.