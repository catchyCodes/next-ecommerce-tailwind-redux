class EnvironmentConfig {
    private isProduction: boolean;

    constructor() {
        // You can set the environment based on a global variable or any other logic
        this.isProduction = process.env.NODE_ENV === 'production';
    }

    isProductionMode(): boolean {
        return this.isProduction;
    }

    getUrls(): { apiUrl: string; websiteAddress: string; [key: string]: string } {
        if (this.isProduction) {
            return {
                apiUrl: 'https://api.production.example.com',
                websiteAddress: 'https://www.production.example.com',
                // Add more production URLs here if needed
            };
        } else {
            return {
                apiUrl: 'http://127.0.0.1:8090',
                websiteAddress: 'http://localhost:3000',
                // Add more development URLs here if needed
            };
        }
    }
}

export default EnvironmentConfig;
