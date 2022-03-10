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
  "/messages": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.messages.id"];
          insert_at?: parameters["rowFilter.messages.insert_at"];
          message?: parameters["rowFilter.messages.message"];
          user_id?: parameters["rowFilter.messages.user_id"];
          ticket_id?: parameters["rowFilter.messages.ticket_id"];
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
          schema: definitions["messages"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** messages */
          messages?: definitions["messages"];
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
          id?: parameters["rowFilter.messages.id"];
          insert_at?: parameters["rowFilter.messages.insert_at"];
          message?: parameters["rowFilter.messages.message"];
          user_id?: parameters["rowFilter.messages.user_id"];
          ticket_id?: parameters["rowFilter.messages.ticket_id"];
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
          id?: parameters["rowFilter.messages.id"];
          insert_at?: parameters["rowFilter.messages.insert_at"];
          message?: parameters["rowFilter.messages.message"];
          user_id?: parameters["rowFilter.messages.user_id"];
          ticket_id?: parameters["rowFilter.messages.ticket_id"];
        };
        body: {
          /** messages */
          messages?: definitions["messages"];
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
  "/operatorforms": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.operatorforms.id"];
          insert_at?: parameters["rowFilter.operatorforms.insert_at"];
          conviction?: parameters["rowFilter.operatorforms.conviction"];
          user_id?: parameters["rowFilter.operatorforms.user_id"];
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
          schema: definitions["operatorforms"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** operatorforms */
          operatorforms?: definitions["operatorforms"];
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
          id?: parameters["rowFilter.operatorforms.id"];
          insert_at?: parameters["rowFilter.operatorforms.insert_at"];
          conviction?: parameters["rowFilter.operatorforms.conviction"];
          user_id?: parameters["rowFilter.operatorforms.user_id"];
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
          id?: parameters["rowFilter.operatorforms.id"];
          insert_at?: parameters["rowFilter.operatorforms.insert_at"];
          conviction?: parameters["rowFilter.operatorforms.conviction"];
          user_id?: parameters["rowFilter.operatorforms.user_id"];
        };
        body: {
          /** operatorforms */
          operatorforms?: definitions["operatorforms"];
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
  "/role_permissions": {
    get: {
      parameters: {
        query: {
          permissions_id?: parameters["rowFilter.role_permissions.permissions_id"];
          role?: parameters["rowFilter.role_permissions.role"];
          permission?: parameters["rowFilter.role_permissions.permission"];
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
          schema: definitions["role_permissions"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** role_permissions */
          role_permissions?: definitions["role_permissions"];
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
          permissions_id?: parameters["rowFilter.role_permissions.permissions_id"];
          role?: parameters["rowFilter.role_permissions.role"];
          permission?: parameters["rowFilter.role_permissions.permission"];
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
          permissions_id?: parameters["rowFilter.role_permissions.permissions_id"];
          role?: parameters["rowFilter.role_permissions.role"];
          permission?: parameters["rowFilter.role_permissions.permission"];
        };
        body: {
          /** role_permissions */
          role_permissions?: definitions["role_permissions"];
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
  "/ticket_type": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ticket_type.id"];
          name?: parameters["rowFilter.ticket_type.name"];
          description?: parameters["rowFilter.ticket_type.description"];
          created_by?: parameters["rowFilter.ticket_type.created_by"];
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
          schema: definitions["ticket_type"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** ticket_type */
          ticket_type?: definitions["ticket_type"];
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
          id?: parameters["rowFilter.ticket_type.id"];
          name?: parameters["rowFilter.ticket_type.name"];
          description?: parameters["rowFilter.ticket_type.description"];
          created_by?: parameters["rowFilter.ticket_type.created_by"];
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
          id?: parameters["rowFilter.ticket_type.id"];
          name?: parameters["rowFilter.ticket_type.name"];
          description?: parameters["rowFilter.ticket_type.description"];
          created_by?: parameters["rowFilter.ticket_type.created_by"];
        };
        body: {
          /** ticket_type */
          ticket_type?: definitions["ticket_type"];
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
  "/tickets": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tickets.id"];
          user_id?: parameters["rowFilter.tickets.user_id"];
          created_at?: parameters["rowFilter.tickets.created_at"];
          ticket_type_id?: parameters["rowFilter.tickets.ticket_type_id"];
          description?: parameters["rowFilter.tickets.description"];
          state?: parameters["rowFilter.tickets.state"];
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
          schema: definitions["tickets"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** tickets */
          tickets?: definitions["tickets"];
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
          id?: parameters["rowFilter.tickets.id"];
          user_id?: parameters["rowFilter.tickets.user_id"];
          created_at?: parameters["rowFilter.tickets.created_at"];
          ticket_type_id?: parameters["rowFilter.tickets.ticket_type_id"];
          description?: parameters["rowFilter.tickets.description"];
          state?: parameters["rowFilter.tickets.state"];
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
          id?: parameters["rowFilter.tickets.id"];
          user_id?: parameters["rowFilter.tickets.user_id"];
          created_at?: parameters["rowFilter.tickets.created_at"];
          ticket_type_id?: parameters["rowFilter.tickets.ticket_type_id"];
          description?: parameters["rowFilter.tickets.description"];
          state?: parameters["rowFilter.tickets.state"];
        };
        body: {
          /** tickets */
          tickets?: definitions["tickets"];
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
  "/user_roles": {
    get: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.user_roles.user_id"];
          role?: parameters["rowFilter.user_roles.role"];
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
          schema: definitions["user_roles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user_roles */
          user_roles?: definitions["user_roles"];
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
          user_id?: parameters["rowFilter.user_roles.user_id"];
          role?: parameters["rowFilter.user_roles.role"];
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
          user_id?: parameters["rowFilter.user_roles.user_id"];
          role?: parameters["rowFilter.user_roles.role"];
        };
        body: {
          /** user_roles */
          user_roles?: definitions["user_roles"];
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
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
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
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
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
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
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
  "/rpc/isinmyticket": {
    post: {
      parameters: {
        body: {
          args: {
            /** Format: uuid */
            v_user_id: string;
            /** Format: uuid */
            v_ticket_id: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/authorize": {
    post: {
      parameters: {
        body: {
          args: {
            /** Format: uuid */
            user_id: string;
            /** Format: public.app_permission */
            request_permission: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  messages: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    insert_at: string;
    /** Format: text */
    message?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `tickets.id`.<fk table='tickets' column='id'/>
     */
    ticket_id: string;
  };
  operatorforms: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    insert_at: string;
    /** Format: text */
    conviction?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id: string;
  };
  role_permissions: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    permissions_id: number;
    /** Format: public.app_role */
    role: "admin" | "operator" | "user";
    /** Format: public.app_permission */
    permission:
      | "tickets.select"
      | "tickets.update"
      | "tickets.delete"
      | "user_roles.update"
      | "users.select"
      | "users.update"
      | "users.insert"
      | "users.delete"
      | "ticket_type.select"
      | "ticket_type.update"
      | "ticket_type.insert"
      | "ticket_type.delete"
      | "messages.select"
      | "messages.delete";
  };
  ticket_type: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name?: string;
    /** Format: text */
    description?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    created_by?: string;
  };
  tickets: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `ticket_type.id`.<fk table='ticket_type' column='id'/>
     */
    ticket_type_id: number;
    /** Format: text */
    description?: string;
    /**
     * Format: public.ticket_state
     * @default waiting
     */
    state: "waiting" | "ongoing" | "done";
  };
  user_roles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    user_id: string;
    /** Format: public.app_role */
    role?: "admin" | "operator" | "user";
  };
  users: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    first_name?: string;
    /** Format: text */
    last_name?: string;
    /** Format: text */
    email?: string;
  };
}

export interface parameters {
  /** @description Preference */
  preferParams: "params=single-object";
  /** @description Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** @description Preference */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description messages */
  "body.messages": definitions["messages"];
  /** Format: bigint */
  "rowFilter.messages.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.messages.insert_at": string;
  /** Format: text */
  "rowFilter.messages.message": string;
  /** Format: uuid */
  "rowFilter.messages.user_id": string;
  /** Format: uuid */
  "rowFilter.messages.ticket_id": string;
  /** @description operatorforms */
  "body.operatorforms": definitions["operatorforms"];
  /** Format: bigint */
  "rowFilter.operatorforms.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.operatorforms.insert_at": string;
  /** Format: text */
  "rowFilter.operatorforms.conviction": string;
  /** Format: uuid */
  "rowFilter.operatorforms.user_id": string;
  /** @description role_permissions */
  "body.role_permissions": definitions["role_permissions"];
  /** Format: bigint */
  "rowFilter.role_permissions.permissions_id": string;
  /** Format: public.app_role */
  "rowFilter.role_permissions.role": string;
  /** Format: public.app_permission */
  "rowFilter.role_permissions.permission": string;
  /** @description ticket_type */
  "body.ticket_type": definitions["ticket_type"];
  /** Format: bigint */
  "rowFilter.ticket_type.id": string;
  /** Format: text */
  "rowFilter.ticket_type.name": string;
  /** Format: text */
  "rowFilter.ticket_type.description": string;
  /** Format: uuid */
  "rowFilter.ticket_type.created_by": string;
  /** @description tickets */
  "body.tickets": definitions["tickets"];
  /** Format: uuid */
  "rowFilter.tickets.id": string;
  /** Format: uuid */
  "rowFilter.tickets.user_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.tickets.created_at": string;
  /** Format: bigint */
  "rowFilter.tickets.ticket_type_id": string;
  /** Format: text */
  "rowFilter.tickets.description": string;
  /** Format: public.ticket_state */
  "rowFilter.tickets.state": string;
  /** @description user_roles */
  "body.user_roles": definitions["user_roles"];
  /** Format: uuid */
  "rowFilter.user_roles.user_id": string;
  /** Format: public.app_role */
  "rowFilter.user_roles.role": string;
  /** @description users */
  "body.users": definitions["users"];
  /** Format: uuid */
  "rowFilter.users.id": string;
  /** Format: text */
  "rowFilter.users.first_name": string;
  /** Format: text */
  "rowFilter.users.last_name": string;
  /** Format: text */
  "rowFilter.users.email": string;
}

export interface operations {}

export interface external {}
