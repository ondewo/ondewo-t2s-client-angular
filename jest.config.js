/**
 * Jest configuration for the hand-written Keycloak bearer-auth surface.
 *
 * Only the files under `src/lib/auth/` are compiled and measured. Every
 * generated protobuf / gRPC-web stub is excluded from both transformation and
 * coverage so the 100% threshold gates the auth code alone.
 */

/** Generated-stub path fragments that must never count toward coverage. */
const GENERATED_STUB_PATTERNS = [
  "\\.pb\\.ts$",
  "\\.pbsc\\.ts$",
  "\\.pbconf\\.ts$",
  "\\.pbsc$",
  "_pb\\.js$",
  "_pb\\.ts$",
  "_pb\\.d\\.ts$",
  ".*ServiceClientPb\\.ts$",
  "_grpc_web_pb\\.js$",
  "_grpc_web_pb\\.ts$",
  "_grpc_web_pb\\.d\\.ts$"
];

/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.ts"],
  roots: ["<rootDir>/src/lib/auth"],
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json"
      }
    ]
  },
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["text", "text-summary", "lcov"],
  collectCoverageFrom: ["src/lib/auth/**/*.ts", "!src/lib/auth/**/*.spec.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/ondewo-t2s-api/",
    "/api/",
    "\\.spec\\.ts$",
    ...GENERATED_STUB_PATTERNS
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
