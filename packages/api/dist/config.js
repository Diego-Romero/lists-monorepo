"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: __dirname + `/./../../../.env` });
const config = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    sessionSecret: process.env.SESSION_SECRET,
    saltRounds: process.env.NODE_ENV === 'production' ? 12 : 1,
};
for (const value of Object.values(config)) {
    if (value === undefined)
        throw new Error('ERROR: missing to add fields to .env');
}
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHLGtCQUFrQixFQUFFLENBQUMsQ0FBQztBQVFuRSxNQUFNLE1BQU0sR0FBVztJQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0lBQ3RCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7SUFDekIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztJQUN6QyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDM0QsQ0FBQztBQUVGLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QyxJQUFJLEtBQUssS0FBSyxTQUFTO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0NBQ2xGO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=