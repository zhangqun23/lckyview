import React from 'react'
import {Link} from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router';
const required = value => value ? undefined : '不能为空'
const maxLength = max => value =>
  value && value.length > max ? `最多 ${max} 个字符` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? '必须为数字' : undefined
const minValue = min => value =>
  value && value < min ? `最少为 ${min}` : undefined
const minValue18 = minValue(18)

const errorStyle = {
    color: "red"
}

const warnStyle = {
    color: "purple"
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
     <div className="weui_cell password">
                <div className="weui_cell_bd weui_cell_primary password">
            <input className="weui_input" {...input} placeholder={label} type={type} />
            {touched && ((error && <span style={errorStyle}>{error}</span>) || (warning && <span style={warnStyle}>{warning}</span>))}
        </div>
    </div>
)

const FieldLevelValidate = (props) => {
    const { handleSubmit, reset, pristine, submitting, submitAction } = props;
    return (
        <form onSubmit={handleSubmit(submitAction)} role="form">
             <article style={{bottom:"54px"}}>
             <div className="weui_cells animated fadeInRight">
                    <div className="weui_cell tip">
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>姓名</p>
                        </div>
                    </div>
            </div>
            
                   <Field name="newPassword1" component={renderField} type="text" label="请输入姓名"/>
              
            <div className="weui_cells animated fadeInRight">
                    <div className="weui_cell tip">
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>学号</p>
                        </div>
                    </div>
            </div>
                     <Field name="newPassword2" component={renderField} type="text" label="请输入学号" />
            <div className="weui_cells animated fadeInRight">
                    <div className="weui_cell tip">
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>新密码确认</p>
                        </div>
                    </div>
            </div>
                    <Field name="oldPassword" component={renderField} type="password" />
            <div className="button">
                <div className="bd">
                     <button type="submit" className="weui_btn weui_btn_primary" disabled={pristine || submitting}>提交</button>
                        <Link to="/Todo">待办事项</Link>
                </div>
            </div>
            </article>
            </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidate'
})(FieldLevelValidate)









