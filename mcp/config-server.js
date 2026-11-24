import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import 'dotenv/config';

const server = new McpServer({
    name: 'test-config-server',
    version: '1.0.0'
});

server.tool(
    'get_application_config',
    'Get application URL and browser configuration',
    {},
    async () => {
        return {
            content: [{
                type: 'text',
                text: JSON.stringify({
                    baseUrl: process.env.BASE_URL,
                    browser: process.env.BROWSER
                })
            }]
        };
    }
);

const transport = new StdioServerTransport();
await server.connect(transport);
