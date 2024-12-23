export class ServiceInstanceRegistry {
    private static serviceRegistry: Map<string, unknown> = new Map();

    public static setInstance(serviceName: string, instance: unknown): void {
        if (!this.serviceRegistry.has(serviceName)) {
            this.serviceRegistry.set(serviceName, instance);
        }
    }

    public static getInstance<T>(serviceName: string): T {
        if (!this.serviceRegistry.has(serviceName)) {
            throw new Error(`Service doesn't exist: ${serviceName}`);
        }

        return this.serviceRegistry.get(serviceName)! as T;
    }
}
