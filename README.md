MedicMobileImpact
=================

## Instructions

 Step 1.  Download this repository.  On the GitHub site, you can download a zipped version of this repo, or if you are a savvy git user, you can clone it to your desktop.

 Step 2.  Download and install RStudio.

https://www.rstudio.com/

 Step 3.  Open RStudio, and install the knitr package.  Do this by clicking _Packages_ tab, then click the _Install Packages_ button.  Search for "knitr", make sure _Install dependencies_ is checked, and click _Install_.

 Step 4.  Enable knitr in RStudio.  Do this by clicking _Preferences_, then clicking the _Sweave_ tab.  Next to "Weave Rnw files using", select knitr from the drop-down menu.  Click _Apply_ and _Ok_.

 Step 5.  Open the ANC markdown source document, "Medic_Mobile_ANC_worksheet.Rmd", in RStudio.

 Step 6.  In Rstudio, compile and execute the ANC knitr document by clicking the _Knit HTML_ button.  You should see a window pop up that shows the formatted version of the markdown document.  This is the "Preview HTML" window.  Read through this document carefully and follow the instructions.  It will require you to switch between itself, the markdown source in RStudio and Spectrum (command-tab and command-tilde are your friends).  Whenever you make a change in the markdown source document in RStudio, make sure to save it and then switch to the "Preview HTML" window and click refresh (it's a typical refresh arrow circle icon).  "Medic_Mobile_ANC_worksheet.Rmd" is a living document that computes statistics you need to do the projections on the fly, and presents instructions and other information in an easy to read format.
