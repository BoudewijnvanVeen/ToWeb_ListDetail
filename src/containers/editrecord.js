
import React from 'react'
import { connect } from 'react-redux'
import Form from "react-jsonschema-form";
import { schema, uischema } from "../data/schemas/schema1";
import { updateRecord } from '../actions'

const EditRecordForm = ({ record, onFormSubmit }) => {
    let onSubmit = (formData) => { onFormSubmit(new Record(record.header, formData)); };
    return (<Form schema={schema} uiSchema={uischema} formData={record.body} onSubmit={e => onSubmit(e.formData)}  onError={ e => console.log(e) } />)
}

const mapStateToProps = (state) => {
    return { record: state.detail }
}

const mapDispatchToProps = (dispatch) => {
    return { onFormSubmit: (record) => { dispatch(updateRecord(record)) } }
}

const EditRecord = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditRecordForm);

export default EditRecord

// private

function Record(header, body) {
  this.header = header;
  this.body = body;
}
