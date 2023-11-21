EB Setup

### Intialise EB

Go to folder where you want to Intialise EB
`eb init --profile <profile name>`

#### Create Application
`eb create <app name>`

#### Create environment
`eb create --single`

enter environment name in prompt.


####
`aws elasticbeanstalk update-environment --environment-name Myawesomeapp-env-1 --version-label "ver-${{ github.sha }}"`
