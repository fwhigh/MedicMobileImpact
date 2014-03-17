MedicMobileImpact
=================

## For worksheet end-users

The worksheets are served at:

http://54.226.229.69/ocpu/library/MedicMobileImpact/anc/

http://54.226.229.69/ocpu/library/MedicMobileImpact/vaccine/

You can also run them locally on your machine.  Requires XQuartz for Mac systems prior to Mavericks.  At the R prompt:

    install.packages("opencpu","devtools",dependencies=TRUE) # one time only
    library(devtools)
    library(opencpu)
    install_github("MedicMobileImpact","fwhigh")
    opencpu$browse("/library/MedicMobileImpact/anc")
    opencpu$browse("/library/MedicMobileImpact/vaccine")
    
To save a record of your work, click on the righthand panel in the web app, select all (command-a), and print (command-p or File &rarr; Print).

## For administrators

### Standing up the server from your local repository.

In R:

    install.packages("opencpu",dependencies=TRUE)
    library(devtools)
    library(opencpu)
    install.packages("/FULL/PATH/TO/MedicMobileImpact", repos = NULL, type="source")
    opencpu$browse("/library/MedicMobileImpact/anc")
    opencpu$browse("/library/MedicMobileImpact/vaccine")
    
### Updating the cloud server.

On the server:

    sudo R
    > library(devtools)
    > install_github("MedicMobileImpact","fwhigh")
    sudo service opencpu restart

 
