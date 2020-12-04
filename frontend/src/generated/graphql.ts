export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads a set of `Account`. */
  allAccountsList?: Maybe<Array<Account>>;
  /** Reads a set of `BadgeGrant`. */
  allBadgeGrantsList?: Maybe<Array<BadgeGrant>>;
  /** Reads a set of `BadgePermission`. */
  allBadgePermissionsList?: Maybe<Array<BadgePermission>>;
  /** Reads a set of `Badge`. */
  allBadgesList?: Maybe<Array<Badge>>;
  accountById?: Maybe<Account>;
  badgeById?: Maybe<Badge>;
  currentAccount?: Maybe<CurrentAccountRecord>;
  /** Reads a single `Account` using its globally unique `ID`. */
  account?: Maybe<Account>;
  /** Reads a single `Badge` using its globally unique `ID`. */
  badge?: Maybe<Badge>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
  condition?: Maybe<AccountCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBadgeGrantsListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgeGrantsOrderBy>>;
  condition?: Maybe<BadgeGrantCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBadgePermissionsListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgePermissionsOrderBy>>;
  condition?: Maybe<BadgePermissionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBadgesListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgesOrderBy>>;
  condition?: Maybe<BadgeCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBadgeByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBadgeArgs = {
  nodeId: Scalars['ID'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Account = Node & {
  __typename?: 'Account';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `BadgeGrant`. */
  badgeGrantsByGrantedByList: Array<BadgeGrant>;
  /** Reads and enables pagination through a set of `BadgeGrant`. */
  badgeGrantsByGrantedToList: Array<BadgeGrant>;
  /** Reads and enables pagination through a set of `BadgePermission`. */
  badgePermissionsByAccountIdList: Array<BadgePermission>;
};


export type AccountBadgeGrantsByGrantedByListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgeGrantsOrderBy>>;
  condition?: Maybe<BadgeGrantCondition>;
};


export type AccountBadgeGrantsByGrantedToListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgeGrantsOrderBy>>;
  condition?: Maybe<BadgeGrantCondition>;
};


export type AccountBadgePermissionsByAccountIdListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgePermissionsOrderBy>>;
  condition?: Maybe<BadgePermissionCondition>;
};

export type BadgeGrant = {
  __typename?: 'BadgeGrant';
  badgeId: Scalars['Int'];
  grantedBy: Scalars['Int'];
  grantedTo: Scalars['Int'];
  created?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Badge` that is related to this `BadgeGrant`. */
  badgeByBadgeId?: Maybe<Badge>;
  /** Reads a single `Account` that is related to this `BadgeGrant`. */
  accountByGrantedBy?: Maybe<Account>;
  /** Reads a single `Account` that is related to this `BadgeGrant`. */
  accountByGrantedTo?: Maybe<Account>;
};


export type Badge = Node & {
  __typename?: 'Badge';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  fallbackText?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `BadgeGrant`. */
  badgeGrantsByBadgeIdList: Array<BadgeGrant>;
  /** Reads and enables pagination through a set of `BadgePermission`. */
  badgePermissionsByBadgeIdList: Array<BadgePermission>;
};


export type BadgeBadgeGrantsByBadgeIdListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgeGrantsOrderBy>>;
  condition?: Maybe<BadgeGrantCondition>;
};


export type BadgeBadgePermissionsByBadgeIdListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BadgePermissionsOrderBy>>;
  condition?: Maybe<BadgePermissionCondition>;
};

/** Methods to use when ordering `BadgeGrant`. */
export enum BadgeGrantsOrderBy {
  Natural = 'NATURAL',
  BadgeIdAsc = 'BADGE_ID_ASC',
  BadgeIdDesc = 'BADGE_ID_DESC',
  GrantedByAsc = 'GRANTED_BY_ASC',
  GrantedByDesc = 'GRANTED_BY_DESC',
  GrantedToAsc = 'GRANTED_TO_ASC',
  GrantedToDesc = 'GRANTED_TO_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC'
}

/**
 * A condition to be used against `BadgeGrant` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BadgeGrantCondition = {
  /** Checks for equality with the object’s `badgeId` field. */
  badgeId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `grantedBy` field. */
  grantedBy?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `grantedTo` field. */
  grantedTo?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `created` field. */
  created?: Maybe<Scalars['Datetime']>;
};

export type BadgePermission = {
  __typename?: 'BadgePermission';
  badgeId: Scalars['Int'];
  accountId?: Maybe<Scalars['Int']>;
  canEdit: Scalars['Boolean'];
  canGrant: Scalars['Boolean'];
  /** Reads a single `Badge` that is related to this `BadgePermission`. */
  badgeByBadgeId?: Maybe<Badge>;
  /** Reads a single `Account` that is related to this `BadgePermission`. */
  accountByAccountId?: Maybe<Account>;
};

/** Methods to use when ordering `BadgePermission`. */
export enum BadgePermissionsOrderBy {
  Natural = 'NATURAL',
  BadgeIdAsc = 'BADGE_ID_ASC',
  BadgeIdDesc = 'BADGE_ID_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CanEditAsc = 'CAN_EDIT_ASC',
  CanEditDesc = 'CAN_EDIT_DESC',
  CanGrantAsc = 'CAN_GRANT_ASC',
  CanGrantDesc = 'CAN_GRANT_DESC'
}

/**
 * A condition to be used against `BadgePermission` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type BadgePermissionCondition = {
  /** Checks for equality with the object’s `badgeId` field. */
  badgeId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `canEdit` field. */
  canEdit?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `canGrant` field. */
  canGrant?: Maybe<Scalars['Boolean']>;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ProfileAsc = 'PROFILE_ASC',
  ProfileDesc = 'PROFILE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `profile` field. */
  profile?: Maybe<Scalars['String']>;
};

/** Methods to use when ordering `Badge`. */
export enum BadgesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ImageUrlAsc = 'IMAGE_URL_ASC',
  ImageUrlDesc = 'IMAGE_URL_DESC',
  FallbackTextAsc = 'FALLBACK_TEXT_ASC',
  FallbackTextDesc = 'FALLBACK_TEXT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Badge` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BadgeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `fallbackText` field. */
  fallbackText?: Maybe<Scalars['String']>;
};

/** The return type of our `currentAccount` query. */
export type CurrentAccountRecord = {
  __typename?: 'CurrentAccountRecord';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Account`. */
  createAccount?: Maybe<CreateAccountPayload>;
  /** Creates a single `BadgeGrant`. */
  createBadgeGrant?: Maybe<CreateBadgeGrantPayload>;
  /** Creates a single `BadgePermission`. */
  createBadgePermission?: Maybe<CreateBadgePermissionPayload>;
  /** Creates a single `Badge`. */
  createBadge?: Maybe<CreateBadgePayload>;
  /** Updates a single `Account` using its globally unique id and a patch. */
  updateAccount?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountById?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Badge` using its globally unique id and a patch. */
  updateBadge?: Maybe<UpdateBadgePayload>;
  /** Updates a single `Badge` using a unique key and a patch. */
  updateBadgeById?: Maybe<UpdateBadgePayload>;
  /** Deletes a single `Account` using its globally unique id. */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Account` using a unique key. */
  deleteAccountById?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Badge` using its globally unique id. */
  deleteBadge?: Maybe<DeleteBadgePayload>;
  /** Deletes a single `Badge` using a unique key. */
  deleteBadgeById?: Maybe<DeleteBadgePayload>;
  authenticateAccount?: Maybe<AuthenticateAccountPayload>;
  registerAccount?: Maybe<RegisterAccountPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBadgeGrantArgs = {
  input: CreateBadgeGrantInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBadgePermissionArgs = {
  input: CreateBadgePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBadgeArgs = {
  input: CreateBadgeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByIdArgs = {
  input: UpdateAccountByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBadgeArgs = {
  input: UpdateBadgeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBadgeByIdArgs = {
  input: UpdateBadgeByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByIdArgs = {
  input: DeleteAccountByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBadgeArgs = {
  input: DeleteBadgeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBadgeByIdArgs = {
  input: DeleteBadgeByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateAccountArgs = {
  input: AuthenticateAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterAccountArgs = {
  input: RegisterAccountInput;
};

/** The output of our create `Account` mutation. */
export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was created by this mutation. */
  account?: Maybe<Account>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Account` mutation. */
export type CreateAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` to be created by this mutation. */
  account: AccountInput;
};

/** An input for mutations affecting `Account` */
export type AccountInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

/** The output of our create `BadgeGrant` mutation. */
export type CreateBadgeGrantPayload = {
  __typename?: 'CreateBadgeGrantPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BadgeGrant` that was created by this mutation. */
  badgeGrant?: Maybe<BadgeGrant>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Badge` that is related to this `BadgeGrant`. */
  badgeByBadgeId?: Maybe<Badge>;
  /** Reads a single `Account` that is related to this `BadgeGrant`. */
  accountByGrantedBy?: Maybe<Account>;
  /** Reads a single `Account` that is related to this `BadgeGrant`. */
  accountByGrantedTo?: Maybe<Account>;
};

/** All input for the create `BadgeGrant` mutation. */
export type CreateBadgeGrantInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BadgeGrant` to be created by this mutation. */
  badgeGrant: BadgeGrantInput;
};

/** An input for mutations affecting `BadgeGrant` */
export type BadgeGrantInput = {
  badgeId: Scalars['Int'];
  grantedBy: Scalars['Int'];
  grantedTo: Scalars['Int'];
  created?: Maybe<Scalars['Datetime']>;
};

/** The output of our create `BadgePermission` mutation. */
export type CreateBadgePermissionPayload = {
  __typename?: 'CreateBadgePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BadgePermission` that was created by this mutation. */
  badgePermission?: Maybe<BadgePermission>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Badge` that is related to this `BadgePermission`. */
  badgeByBadgeId?: Maybe<Badge>;
  /** Reads a single `Account` that is related to this `BadgePermission`. */
  accountByAccountId?: Maybe<Account>;
};

/** All input for the create `BadgePermission` mutation. */
export type CreateBadgePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BadgePermission` to be created by this mutation. */
  badgePermission: BadgePermissionInput;
};

/** An input for mutations affecting `BadgePermission` */
export type BadgePermissionInput = {
  badgeId: Scalars['Int'];
  accountId?: Maybe<Scalars['Int']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canGrant?: Maybe<Scalars['Boolean']>;
};

/** The output of our create `Badge` mutation. */
export type CreateBadgePayload = {
  __typename?: 'CreateBadgePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Badge` that was created by this mutation. */
  badge?: Maybe<Badge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Badge` mutation. */
export type CreateBadgeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Badge` to be created by this mutation. */
  badge: BadgeInput;
};

/** An input for mutations affecting `Badge` */
export type BadgeInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  fallbackText?: Maybe<Scalars['String']>;
};

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was updated by this mutation. */
  account?: Maybe<Account>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateAccount` mutation. */
export type UpdateAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Account` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch;
};

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

/** All input for the `updateAccountById` mutation. */
export type UpdateAccountByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch;
  id: Scalars['Int'];
};

/** The output of our update `Badge` mutation. */
export type UpdateBadgePayload = {
  __typename?: 'UpdateBadgePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Badge` that was updated by this mutation. */
  badge?: Maybe<Badge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateBadge` mutation. */
export type UpdateBadgeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Badge` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Badge` being updated. */
  badgePatch: BadgePatch;
};

/** Represents an update to a `Badge`. Fields that are set will be updated. */
export type BadgePatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  fallbackText?: Maybe<Scalars['String']>;
};

/** All input for the `updateBadgeById` mutation. */
export type UpdateBadgeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Badge` being updated. */
  badgePatch: BadgePatch;
  id: Scalars['Int'];
};

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was deleted by this mutation. */
  account?: Maybe<Account>;
  deletedAccountId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteAccount` mutation. */
export type DeleteAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Account` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteAccountById` mutation. */
export type DeleteAccountByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Badge` mutation. */
export type DeleteBadgePayload = {
  __typename?: 'DeleteBadgePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Badge` that was deleted by this mutation. */
  badge?: Maybe<Badge>;
  deletedBadgeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteBadge` mutation. */
export type DeleteBadgeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Badge` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteBadgeById` mutation. */
export type DeleteBadgeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our `authenticateAccount` mutation. */
export type AuthenticateAccountPayload = {
  __typename?: 'AuthenticateAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jwtToken?: Maybe<Scalars['JwtToken']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** All input for the `authenticateAccount` mutation. */
export type AuthenticateAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The output of our `registerAccount` mutation. */
export type RegisterAccountPayload = {
  __typename?: 'RegisterAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  account?: Maybe<Account>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `registerAccount` mutation. */
export type RegisterAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};
