"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const gateway_module_1 = require("./gateway.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(gateway_module_1.GatewayModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map