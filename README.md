MedicMobileImpact
=================

## Instructions on running the worksheet in your browser

In R:

    install.packages("opencpu",dependencies=TRUE)
    library(devtools)
    install_github("MedicMobileImpact","fwhigh")
    opencpu$browse("/library/MedicMobileImpact/www")
    
## Instructions on running the worksheet in RStudio

 Step 1.  Download this repository.  On the GitHub site, you can download a zipped version of this repo, or if you are a savvy git user, you can clone it to your desktop.

 Step 2.  Download and install R.
 
 http://cran.r-project.org/
 
 And RStudio.

https://www.rstudio.com/

 Step 3.  Open RStudio, and install the knitr package.  Do this by clicking _Packages_ tab, then click the _Install Packages_ button.  Search for "knitr", make sure _Install dependencies_ is checked, and click _Install_.  This procedure has been tested using knitr 1.5.  To make sure you have the latest knitr update, in RStudio in the _Packages_ tab click _Check for Updates_ and follow the instructions.

 Step 4.  Enable knitr in RStudio.  Do this by clicking _Preferences_, then clicking the _Sweave_ tab.  Next to "Weave Rnw files using", select knitr from the drop-down menu.  Click _Apply_ and _Ok_.

 Step 5.  Open the markdown source document (e.g. "Medic_Mobile_ANC_worksheet.Rmd"), in RStudio.

 Step 6.  In Rstudio, compile and execute the ANC knitr document by clicking the _Knit HTML_ button.  You should see a window pop up that shows the formatted version of the markdown document.  This is the "Preview HTML" window.  Read through this document carefully and follow the instructions.  It will require you to switch between itself, the markdown source in RStudio and Spectrum (command-tab and command-tilde are your friends).  Whenever you make a change in the markdown source document in RStudio, make sure to save it and then switch to the "Preview HTML" window and click refresh (it's a typical refresh arrow circle icon).  "Medic_Mobile_ANC_worksheet.Rmd" and "Medic_Mobile_Vaccine_worksheet.Rmd" are living documents that compute statistics you need to do the projections on the fly, and present instructions and other information in an easy to read format.

 Step 7.  When you're done going through the worksheet, in "Preview HTML" click the "View page in system browser" icon, and the page will show up in your default browser.   You can save the document as PDF here if you want to have a record of your Spectrum projection session.
 
