class EntityOptions {
    static readonly UUID = "uuid";
}

class QueryNames {
    static readonly GET_ALL_CATEGORIES = "categories";
    static readonly GET_ALL_TODOS = "todos";
}

class FilesPaths {
    static readonly GRAPHQL_SCHEMA = "src/schema.gql";
}

class General {
    static readonly DEFAULT_PORT = 3000;
}

export class Constants {
    static readonly ENTITY_OPTIONS = EntityOptions;
    static readonly QUERY_NAMES = QueryNames;
    static readonly FILES_PATHS = FilesPaths;
    static readonly GENERAL = General;
}