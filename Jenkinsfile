node {
  stages {
        stage('Checkout') {
            steps {
             git "https://github.com/juliusriestra/cucumber-junit-maps"
           }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
