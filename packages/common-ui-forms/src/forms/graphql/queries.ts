const fieldsCombinedByContentType = `
  query fieldsCombinedByContentType($contentType: String!,$usageType: String, $excludedNames: [String], $segmentId: String, $pipelineId: String, $formId: String) {
    fieldsCombinedByContentType(contentType: $contentType,usageType: $usageType, excludedNames: $excludedNames, segmentId: $segmentId, pipelineId: $pipelineId, formId: $formId)
  }
`;

const fields = `
  query fields($contentType: String!, $contentTypeId: String) {
    fields(contentType: $contentType, contentTypeId: $contentTypeId) {
      _id
      type
      validation
      text
      content
      description
      options
      isRequired
      order
      column
      logicAction
      logics {
        fieldId
        logicOperator
        logicValue
      }
      groupName
      associatedFieldId
      associatedField {
        _id
        text
        contentType
      }
      pageNumber
    }
  }
`;

const formFields = `
    _id
    title
    code
    description
    buttonText
    numberOfPages
    createdDate
    createdUserId
`;

const formDetail = `
  query formDetail($_id: String!) {
    formDetail(_id: $_id) {
      ${formFields}
      type
      createdUser {
        _id
        details {
          avatar
          fullName
          position
        }
      }
    }
  }
`;

export default {
  fieldsCombinedByContentType,
  fields,
  formDetail
};