So, I have to use Outlook, but I still use Google Calendar everyday.

Easy, just need to export .ics link from Outlook and add it to Google Calendar, right?

Right?

Oh no, somebody went out of their way to make sure user experience is \*\*\*\*.

According to Google, ["It might take up to 12 hours for changes to show in your Google Calendar."](https://support.google.com/calendar/answer/37100) According to my experience, it take at least one day or never shows up.

So thoughtful. Now I have a new excuse to miss meetings with my professors.

But things are not so bad. If you delete and import the calendar again, Google will likely fetch again. (See the likely?)

Seems like we can use Selenium to automate this and let it run occasionally on some server, right?

Of course, 2-step verification is also required. Why not?

Ok, how about writing some JS to do it?

Ta-da, here's the code to do this.

Guess what went wrong?

Remember the "will likely fetch again"?

Yes, Google Calendar will cache your .ics so even if you re-add, it won't fetch again.

Fortuantely, this is how far they go. Adding some random query at the end of the link can trick Google Calendar to re-fetch. (at least for now)

Ok, if you are in the similar situation, you can add this script to Tampermonkey.

Just remember to change the `ICS_URL_T` and the `USER_NUM`. `USER_NUM` is the number (e.g. 0,1,2) in Google URLs if you logged in multiple Google accounts.

The code is ugly and flaky and it probably will be broken soon with all the hardcoded classnames, but everyone needs to spend some stupid time. I spend it here so I don't spend it while I study and work, but not everyone does this.

BTW, another stupid thing among all these is the repo name.

