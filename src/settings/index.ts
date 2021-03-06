export const API_FILTERS_URL: string = 'https://presidio-api.westeurope.cloudapp.azure.com/api/v1/fieldTypes';
// tslint:disable-next-line:max-line-length
export const API_ANONIMIZE_URL: string = 'https://presidio-api.westeurope.cloudapp.azure.com/api/v1/projects/test/anonymize';
// tslint:disable-next-line:max-line-length
export const API_FINDINGS_URL: string = 'https://presidio-api.westeurope.cloudapp.azure.com/api/v1/projects/test/analyze';

export const INPUT_SEARCH_DELAY_MS = 500;

// tslint:disable:max-line-length
export const INPUT_DEFAULT_TEXT = `Here are a few examples of entities we currently support:

    Credit card: 4095-2609-9393-4932
    Crypto wallet id: 16Yeky6GMjeNkAiNcBY7ZhrLoMSgg1BoyZ
    DateTime: September 18
    Domain: microsoft.com
    Email address: test@presidio.site
    IBAN: IL150120690000003111111
    IP: 192.168.0.1
    Person name: David Johnson

    Bank account: 2854567876542
    Driver license number: H12234567 
    Passport: 912803456
    Phone number: (212) 555-1234.
    Social security number: 078-05-1120

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com.
When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the 
PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the Microsoft Open Source Code of Conduct. For more information see the Code of Conduct FAQ or contact 
opencode@microsoft.com with any additional questions or comments.
`;