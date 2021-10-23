/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/": {
        get: {
            responses: {
                /** OK */
                200: unknown;
            };
        };
    };
    "/admins": {
        get: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.admins.id"];
                    user_id?: parameters["rowFilter.admins.user_id"];
                    /** Filtering Columns */
                    select?: parameters["select"];
                    /** Ordering */
                    order?: parameters["order"];
                    /** Limiting and Pagination */
                    offset?: parameters["offset"];
                    /** Limiting and Pagination */
                    limit?: parameters["limit"];
                };
                header: {
                    /** Limiting and Pagination */
                    Range?: parameters["range"];
                    /** Limiting and Pagination */
                    "Range-Unit"?: parameters["rangeUnit"];
                    /** Preference */
                    Prefer?: parameters["preferCount"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["admins"][];
                };
                /** Partial Content */
                206: unknown;
            };
        };
        post: {
            parameters: {
                body: {
                    /** admins */
                    admins?: definitions["admins"];
                };
                query: {
                    /** Filtering Columns */
                    select?: parameters["select"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** Created */
                201: unknown;
            };
        };
        delete: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.admins.id"];
                    user_id?: parameters["rowFilter.admins.user_id"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
        patch: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.admins.id"];
                    user_id?: parameters["rowFilter.admins.user_id"];
                };
                body: {
                    /** admins */
                    admins?: definitions["admins"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
    };
    "/operator_specializations": {
        get: {
            parameters: {
                query: {
                    operator_id?: parameters["rowFilter.operator_specializations.operator_id"];
                    tickettype_id?: parameters["rowFilter.operator_specializations.tickettype_id"];
                    /** Filtering Columns */
                    select?: parameters["select"];
                    /** Ordering */
                    order?: parameters["order"];
                    /** Limiting and Pagination */
                    offset?: parameters["offset"];
                    /** Limiting and Pagination */
                    limit?: parameters["limit"];
                };
                header: {
                    /** Limiting and Pagination */
                    Range?: parameters["range"];
                    /** Limiting and Pagination */
                    "Range-Unit"?: parameters["rangeUnit"];
                    /** Preference */
                    Prefer?: parameters["preferCount"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["operator_specializations"][];
                };
                /** Partial Content */
                206: unknown;
            };
        };
        post: {
            parameters: {
                body: {
                    /** operator_specializations */
                    operator_specializations?: definitions["operator_specializations"];
                };
                query: {
                    /** Filtering Columns */
                    select?: parameters["select"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** Created */
                201: unknown;
            };
        };
        delete: {
            parameters: {
                query: {
                    operator_id?: parameters["rowFilter.operator_specializations.operator_id"];
                    tickettype_id?: parameters["rowFilter.operator_specializations.tickettype_id"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
        patch: {
            parameters: {
                query: {
                    operator_id?: parameters["rowFilter.operator_specializations.operator_id"];
                    tickettype_id?: parameters["rowFilter.operator_specializations.tickettype_id"];
                };
                body: {
                    /** operator_specializations */
                    operator_specializations?: definitions["operator_specializations"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
    };
    "/operators": {
        get: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.operators.id"];
                    user_id?: parameters["rowFilter.operators.user_id"];
                    rating?: parameters["rowFilter.operators.rating"];
                    specializations?: parameters["rowFilter.operators.specializations"];
                    /** Filtering Columns */
                    select?: parameters["select"];
                    /** Ordering */
                    order?: parameters["order"];
                    /** Limiting and Pagination */
                    offset?: parameters["offset"];
                    /** Limiting and Pagination */
                    limit?: parameters["limit"];
                };
                header: {
                    /** Limiting and Pagination */
                    Range?: parameters["range"];
                    /** Limiting and Pagination */
                    "Range-Unit"?: parameters["rangeUnit"];
                    /** Preference */
                    Prefer?: parameters["preferCount"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["operators"][];
                };
                /** Partial Content */
                206: unknown;
            };
        };
        post: {
            parameters: {
                body: {
                    /** operators */
                    operators?: definitions["operators"];
                };
                query: {
                    /** Filtering Columns */
                    select?: parameters["select"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** Created */
                201: unknown;
            };
        };
        delete: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.operators.id"];
                    user_id?: parameters["rowFilter.operators.user_id"];
                    rating?: parameters["rowFilter.operators.rating"];
                    specializations?: parameters["rowFilter.operators.specializations"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
        patch: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.operators.id"];
                    user_id?: parameters["rowFilter.operators.user_id"];
                    rating?: parameters["rowFilter.operators.rating"];
                    specializations?: parameters["rowFilter.operators.specializations"];
                };
                body: {
                    /** operators */
                    operators?: definitions["operators"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
    };
    "/ticket": {
        get: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.ticket.id"];
                    isalive?: parameters["rowFilter.ticket.isalive"];
                    ticket_type_id?: parameters["rowFilter.ticket.ticket_type_id"];
                    user_id?: parameters["rowFilter.ticket.user_id"];
                    description?: parameters["rowFilter.ticket.description"];
                    created_at?: parameters["rowFilter.ticket.created_at"];
                    /** Filtering Columns */
                    select?: parameters["select"];
                    /** Ordering */
                    order?: parameters["order"];
                    /** Limiting and Pagination */
                    offset?: parameters["offset"];
                    /** Limiting and Pagination */
                    limit?: parameters["limit"];
                };
                header: {
                    /** Limiting and Pagination */
                    Range?: parameters["range"];
                    /** Limiting and Pagination */
                    "Range-Unit"?: parameters["rangeUnit"];
                    /** Preference */
                    Prefer?: parameters["preferCount"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["ticket"][];
                };
                /** Partial Content */
                206: unknown;
            };
        };
        post: {
            parameters: {
                body: {
                    /** ticket */
                    ticket?: definitions["ticket"];
                };
                query: {
                    /** Filtering Columns */
                    select?: parameters["select"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** Created */
                201: unknown;
            };
        };
        delete: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.ticket.id"];
                    isalive?: parameters["rowFilter.ticket.isalive"];
                    ticket_type_id?: parameters["rowFilter.ticket.ticket_type_id"];
                    user_id?: parameters["rowFilter.ticket.user_id"];
                    description?: parameters["rowFilter.ticket.description"];
                    created_at?: parameters["rowFilter.ticket.created_at"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
        patch: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.ticket.id"];
                    isalive?: parameters["rowFilter.ticket.isalive"];
                    ticket_type_id?: parameters["rowFilter.ticket.ticket_type_id"];
                    user_id?: parameters["rowFilter.ticket.user_id"];
                    description?: parameters["rowFilter.ticket.description"];
                    created_at?: parameters["rowFilter.ticket.created_at"];
                };
                body: {
                    /** ticket */
                    ticket?: definitions["ticket"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
    };
    "/tickettype": {
        get: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.tickettype.id"];
                    name?: parameters["rowFilter.tickettype.name"];
                    description?: parameters["rowFilter.tickettype.description"];
                    /** Filtering Columns */
                    select?: parameters["select"];
                    /** Ordering */
                    order?: parameters["order"];
                    /** Limiting and Pagination */
                    offset?: parameters["offset"];
                    /** Limiting and Pagination */
                    limit?: parameters["limit"];
                };
                header: {
                    /** Limiting and Pagination */
                    Range?: parameters["range"];
                    /** Limiting and Pagination */
                    "Range-Unit"?: parameters["rangeUnit"];
                    /** Preference */
                    Prefer?: parameters["preferCount"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["tickettype"][];
                };
                /** Partial Content */
                206: unknown;
            };
        };
        post: {
            parameters: {
                body: {
                    /** tickettype */
                    tickettype?: definitions["tickettype"];
                };
                query: {
                    /** Filtering Columns */
                    select?: parameters["select"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** Created */
                201: unknown;
            };
        };
        delete: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.tickettype.id"];
                    name?: parameters["rowFilter.tickettype.name"];
                    description?: parameters["rowFilter.tickettype.description"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
        patch: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.tickettype.id"];
                    name?: parameters["rowFilter.tickettype.name"];
                    description?: parameters["rowFilter.tickettype.description"];
                };
                body: {
                    /** tickettype */
                    tickettype?: definitions["tickettype"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
    };
    "/users": {
        get: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.users.id"];
                    name?: parameters["rowFilter.users.name"];
                    surname?: parameters["rowFilter.users.surname"];
                    email?: parameters["rowFilter.users.email"];
                    /** Filtering Columns */
                    select?: parameters["select"];
                    /** Ordering */
                    order?: parameters["order"];
                    /** Limiting and Pagination */
                    offset?: parameters["offset"];
                    /** Limiting and Pagination */
                    limit?: parameters["limit"];
                };
                header: {
                    /** Limiting and Pagination */
                    Range?: parameters["range"];
                    /** Limiting and Pagination */
                    "Range-Unit"?: parameters["rangeUnit"];
                    /** Preference */
                    Prefer?: parameters["preferCount"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["users"][];
                };
                /** Partial Content */
                206: unknown;
            };
        };
        post: {
            parameters: {
                body: {
                    /** users */
                    users?: definitions["users"];
                };
                query: {
                    /** Filtering Columns */
                    select?: parameters["select"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** Created */
                201: unknown;
            };
        };
        delete: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.users.id"];
                    name?: parameters["rowFilter.users.name"];
                    surname?: parameters["rowFilter.users.surname"];
                    email?: parameters["rowFilter.users.email"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
        patch: {
            parameters: {
                query: {
                    id?: parameters["rowFilter.users.id"];
                    name?: parameters["rowFilter.users.name"];
                    surname?: parameters["rowFilter.users.surname"];
                    email?: parameters["rowFilter.users.email"];
                };
                body: {
                    /** users */
                    users?: definitions["users"];
                };
                header: {
                    /** Preference */
                    Prefer?: parameters["preferReturn"];
                };
            };
            responses: {
                /** No Content */
                204: never;
            };
        };
    };
}

export interface definitions {
    admins: {
        /**
         * Note:
         * This is a Primary Key.<pk/>
         */
        id: string;
        /**
         * Note:
         * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
         */
        user_id?: string;
    };
    operator_specializations: {
        /**
         * Note:
         * This is a Foreign Key to `operators.id`.<fk table='operators' column='id'/>
         */
        operator_id: string;
        /**
         * Note:
         * This is a Foreign Key to `tickettype.id`.<fk table='tickettype' column='id'/>
         */
        tickettype_id: number;
    };
    operators: {
        /**
         * Note:
         * This is a Primary Key.<pk/>
         */
        id: string;
        /**
         * Note:
         * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
         */
        user_id?: string;
        rating?: number;
        specializations?: number;
    };
    ticket: {
        /**
         * Note:
         * This is a Primary Key.<pk/>
         */
        id: string;
        isalive?: boolean;
        /**
         * Note:
         * This is a Foreign Key to `tickettype.id`.<fk table='tickettype' column='id'/>
         */
        ticket_type_id?: number;
        /**
         * Note:
         * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
         */
        user_id?: string;
        description?: string;
        created_at: string;
    };
    tickettype: {
        /**
         * Note:
         * This is a Primary Key.<pk/>
         */
        id: number;
        name?: string;
        description?: string;
    };
    users: {
        /**
         * Note:
         * This is a Primary Key.<pk/>
         */
        id: string;
        name?: string;
        surname?: string;
        email: string;
    };
}

export interface parameters {
    /** Preference */
    preferParams: "params=single-object";
    /** Preference */
    preferReturn: "return=representation" | "return=minimal" | "return=none";
    /** Preference */
    preferCount: "count=none";
    /** Filtering Columns */
    select: string;
    /** On Conflict */
    on_conflict: string;
    /** Ordering */
    order: string;
    /** Limiting and Pagination */
    range: string;
    /** Limiting and Pagination */
    rangeUnit: string;
    /** Limiting and Pagination */
    offset: string;
    /** Limiting and Pagination */
    limit: string;
    /** admins */
    "body.admins": definitions["admins"];
    "rowFilter.admins.id": string;
    "rowFilter.admins.user_id": string;
    /** operator_specializations */
    "body.operator_specializations": definitions["operator_specializations"];
    "rowFilter.operator_specializations.operator_id": string;
    "rowFilter.operator_specializations.tickettype_id": string;
    /** operators */
    "body.operators": definitions["operators"];
    "rowFilter.operators.id": string;
    "rowFilter.operators.user_id": string;
    "rowFilter.operators.rating": string;
    "rowFilter.operators.specializations": string;
    /** ticket */
    "body.ticket": definitions["ticket"];
    "rowFilter.ticket.id": string;
    "rowFilter.ticket.isalive": string;
    "rowFilter.ticket.ticket_type_id": string;
    "rowFilter.ticket.user_id": string;
    "rowFilter.ticket.description": string;
    "rowFilter.ticket.created_at": string;
    /** tickettype */
    "body.tickettype": definitions["tickettype"];
    "rowFilter.tickettype.id": string;
    "rowFilter.tickettype.name": string;
    "rowFilter.tickettype.description": string;
    /** users */
    "body.users": definitions["users"];
    "rowFilter.users.id": string;
    "rowFilter.users.name": string;
    "rowFilter.users.surname": string;
    "rowFilter.users.email": string;
}

export interface operations {}

export interface external {}
