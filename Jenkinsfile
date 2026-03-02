pipeline {
  agent any

  stages {
    stage('Test') {
      steps {
        sh 'node test.js'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ci-cd-demo:jenkins .'
      }
    }

    stage('Deploy (Run Container)') {
      steps {
        sh '''
          docker rm -f ci-cd-demo-running || true
          docker run -d --name ci-cd-demo-running -p 3001:3000 ci-cd-demo:jenkins
        '''
      }
    }
  }
}