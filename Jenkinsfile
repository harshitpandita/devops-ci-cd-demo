pipeline {
  agent any

  stages {
    stage('Test (Node in Docker)') {
      steps {
        sh '''
          docker run --rm \
            -v "$PWD":/app -w /app \
            node:20-alpine node test.js
        '''
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ci-cd-demo:jenkins .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker rm -f ci-cd-demo-running || true
          docker run -d --name ci-cd-demo-running -p 3001:3000 ci-cd-demo:jenkins
        '''
      }
    }
  }
}