import * as cdk from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'node:path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AfstudeerprojectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new NodejsFunction(this, 'GlueJobLambdaFunction', {
      functionName: 'getGlueJobs',
      runtime: Runtime.NODEJS_18_X,
      handler: 'handler',
      entry: join(__dirname, '../lambda/gluejob.ts'),
    })
  }
}
