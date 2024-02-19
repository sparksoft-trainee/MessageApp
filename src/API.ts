/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  blogPostsId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateToDoInput = {
  id?: string | null,
  title: string,
  completed: boolean,
  listOfTodoTodosId?: string | null,
};

export type ModelToDoConditionInput = {
  title?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelToDoConditionInput | null > | null,
  or?: Array< ModelToDoConditionInput | null > | null,
  not?: ModelToDoConditionInput | null,
  listOfTodoTodosId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ToDo = {
  __typename: "ToDo",
  id: string,
  title: string,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
  listOfTodoTodosId?: string | null,
};

export type UpdateToDoInput = {
  id: string,
  title?: string | null,
  completed?: boolean | null,
  listOfTodoTodosId?: string | null,
};

export type DeleteToDoInput = {
  id: string,
};

export type CreateListOfTodoInput = {
  id?: string | null,
  name: string,
};

export type ModelListOfTodoConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelListOfTodoConditionInput | null > | null,
  or?: Array< ModelListOfTodoConditionInput | null > | null,
  not?: ModelListOfTodoConditionInput | null,
};

export type ListOfTodo = {
  __typename: "ListOfTodo",
  id: string,
  name: string,
  todos?: ModelToDoConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelToDoConnection = {
  __typename: "ModelToDoConnection",
  items:  Array<ToDo | null >,
  nextToken?: string | null,
};

export type UpdateListOfTodoInput = {
  id: string,
  name?: string | null,
};

export type DeleteListOfTodoInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelToDoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelToDoFilterInput | null > | null,
  or?: Array< ModelToDoFilterInput | null > | null,
  not?: ModelToDoFilterInput | null,
  listOfTodoTodosId?: ModelIDInput | null,
};

export type ModelListOfTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelListOfTodoFilterInput | null > | null,
  or?: Array< ModelListOfTodoFilterInput | null > | null,
  not?: ModelListOfTodoFilterInput | null,
};

export type ModelListOfTodoConnection = {
  __typename: "ModelListOfTodoConnection",
  items:  Array<ListOfTodo | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionToDoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionToDoFilterInput | null > | null,
  or?: Array< ModelSubscriptionToDoFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionListOfTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionListOfTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionListOfTodoFilterInput | null > | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type CreateToDoMutationVariables = {
  input: CreateToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type CreateToDoMutation = {
  createToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    listOfTodoTodosId?: string | null,
  } | null,
};

export type UpdateToDoMutationVariables = {
  input: UpdateToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type UpdateToDoMutation = {
  updateToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    listOfTodoTodosId?: string | null,
  } | null,
};

export type DeleteToDoMutationVariables = {
  input: DeleteToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type DeleteToDoMutation = {
  deleteToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    listOfTodoTodosId?: string | null,
  } | null,
};

export type CreateListOfTodoMutationVariables = {
  input: CreateListOfTodoInput,
  condition?: ModelListOfTodoConditionInput | null,
};

export type CreateListOfTodoMutation = {
  createListOfTodo?:  {
    __typename: "ListOfTodo",
    id: string,
    name: string,
    todos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListOfTodoMutationVariables = {
  input: UpdateListOfTodoInput,
  condition?: ModelListOfTodoConditionInput | null,
};

export type UpdateListOfTodoMutation = {
  updateListOfTodo?:  {
    __typename: "ListOfTodo",
    id: string,
    name: string,
    todos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListOfTodoMutationVariables = {
  input: DeleteListOfTodoInput,
  condition?: ModelListOfTodoConditionInput | null,
};

export type DeleteListOfTodoMutation = {
  deleteListOfTodo?:  {
    __typename: "ListOfTodo",
    id: string,
    name: string,
    todos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetToDoQueryVariables = {
  id: string,
};

export type GetToDoQuery = {
  getToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    listOfTodoTodosId?: string | null,
  } | null,
};

export type ListToDosQueryVariables = {
  filter?: ModelToDoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListToDosQuery = {
  listToDos?:  {
    __typename: "ModelToDoConnection",
    items:  Array< {
      __typename: "ToDo",
      id: string,
      title: string,
      completed: boolean,
      createdAt: string,
      updatedAt: string,
      listOfTodoTodosId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetListOfTodoQueryVariables = {
  id: string,
};

export type GetListOfTodoQuery = {
  getListOfTodo?:  {
    __typename: "ListOfTodo",
    id: string,
    name: string,
    todos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListOfTodosQueryVariables = {
  filter?: ModelListOfTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListOfTodosQuery = {
  listListOfTodos?:  {
    __typename: "ModelListOfTodoConnection",
    items:  Array< {
      __typename: "ListOfTodo",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnCreateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnCreateToDoSubscription = {
  onCreateToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    listOfTodoTodosId?: string | null,
  } | null,
};

export type OnUpdateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnUpdateToDoSubscription = {
  onUpdateToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    listOfTodoTodosId?: string | null,
  } | null,
};

export type OnDeleteToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnDeleteToDoSubscription = {
  onDeleteToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    listOfTodoTodosId?: string | null,
  } | null,
};

export type OnCreateListOfTodoSubscriptionVariables = {
  filter?: ModelSubscriptionListOfTodoFilterInput | null,
};

export type OnCreateListOfTodoSubscription = {
  onCreateListOfTodo?:  {
    __typename: "ListOfTodo",
    id: string,
    name: string,
    todos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListOfTodoSubscriptionVariables = {
  filter?: ModelSubscriptionListOfTodoFilterInput | null,
};

export type OnUpdateListOfTodoSubscription = {
  onUpdateListOfTodo?:  {
    __typename: "ListOfTodo",
    id: string,
    name: string,
    todos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListOfTodoSubscriptionVariables = {
  filter?: ModelSubscriptionListOfTodoFilterInput | null,
};

export type OnDeleteListOfTodoSubscription = {
  onDeleteListOfTodo?:  {
    __typename: "ListOfTodo",
    id: string,
    name: string,
    todos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
