"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shared = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
console.log(`api conf: `, config_1.default);
const app = express_1.default();
const port = 8080;
// health check
app.get('/', (req, res) => {
    console.log('received health check request');
    res.status(200).json({ message: 'health check confirmed' });
});
app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});
function shared() {
    return 'hola';
}
exports.shared = shared;
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBcUQ7QUFDckQsc0RBQThCO0FBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGdCQUFNLENBQUMsQ0FBQztBQUVsQyxNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLGVBQWU7QUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFnQixNQUFNO0lBQ3BCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFGRCx3QkFFQztBQUVELGtCQUFlLEdBQUcsQ0FBQyJ9