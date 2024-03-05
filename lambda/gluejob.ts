import * as AWS from 'aws-sdk';
const glue = new AWS.Glue();

exports.handler = async (event: any) => {
    console.log("request:", JSON.stringify(event, undefined, 2));
    
    try {
        const response = await glue.getJobs({}).promise();
        
        let jobNames: never[] = [];
        if (response.Jobs){
            const jobNames = response.Jobs.map(job => job.Name);
        }
        
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jobNames)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            headers: { "Content-Type": "text/plain" },
            body: `Error getting Glue jobs: ${error}`
        };
    }
};