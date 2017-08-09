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
        <article style={{bottom: 54}}>
           <div className="weui_cells weui_cells_access">
		    <div className="weui_cell" href="notice_detail.html">
                <div className="weui_cell_bd weui_cell_primary">
                  <div href="javascript:;" className="weui_btn weui_btn_mini weui_btn_primary" >按时间</div>
				   <div href="javascript:;" className="weui_btn weui_btn_mini weui_btn_primary" >按价格</div>

					
               </div>
              </div>
                <div className="weui_cell" href="javascript:;">
                    <div className="weui_cell_bd weui_cell_primary">
                        <div className="wuliao-title">
                            <label>主题：</label>
                            <span>***村苹果采摘</span>
                        </div>
                        <div className="detail clearfix">
                            <span className="date">价格：20元/人</span>
                            <span className="require">地点：<label>***村***街</label></span>
                            <span className="result">活动状态：<label>进行中</label></span>
                        </div>
						   <div className="detail clearfix">
                            <span className="date">联系人：张三</span>
                            <span className="require">联系方式：<label>157********</label></span>
                        </div>
                        <div className="org">
                            <span>活动内容：苹果成熟旺季，特邀广大朋友来到***村参加苹果采摘活动，活动火爆进行中，进园每人20元随便吃，出园带苹果20元/千克。</span>
                            <label className="green">详情</label>
                        </div>
                    </div>
                </div>
                 <div className="weui_cell" href="javascript:;">
                    <div className="weui_cell_bd weui_cell_primary">
                        <div className="wuliao-title">
                            <label>主题：</label>
                            <span>***村苹果采摘</span>
                        </div>
                        <div className="detail clearfix">
                            <span className="date">价格：20元/人</span>
                            <span className="require">地点：<label>***村***街</label></span>
                            <span className="result">活动状态：<label>进行中</label></span>
                        </div>
						   <div className="detail clearfix">
                            <span className="date">联系人：张三</span>
                            <span className="require">联系方式：<label>157********</label></span>
                        </div>
                        <div className="org">
                            <span>活动内容：苹果成熟旺季，特邀广大朋友来到***村参加苹果采摘活动，活动火爆进行中，进园每人20元随便吃，出园带苹果20元/千克。</span>
                            <label className="green">详情</label>
                        </div>
                    </div>
                </div>
               <div className="weui_cell" href="javascript:;">
                    <div className="weui_cell_bd weui_cell_primary">
                        <div className="wuliao-title">
                            <label>主题：</label>
                            <span>***村苹果采摘</span>
                        </div>
                        <div className="detail clearfix">
                            <span className="date">价格：20元/人</span>
                            <span className="require">地点：<label>***村***街</label></span>
                            <span className="result">活动状态：<label>进行中</label></span>
                        </div>
						   <div className="detail clearfix">
                            <span className="date">联系人：张三</span>
                            <span className="require">联系方式：<label>157********</label></span>
                        </div>
                        <div className="org">
                            <span>活动内容：苹果成熟旺季，特邀广大朋友来到***村参加苹果采摘活动，活动火爆进行中，进园每人20元随便吃，出园带苹果20元/千克。</span>
                            <label className="green">详情</label>
                        </div>
                    </div>
                </div>
                 <div className="weui_cell" href="javascript:;">
                    <div className="weui_cell_bd weui_cell_primary">
                        <div className="wuliao-title">
                            <label>主题：</label>
                            <span>***村苹果采摘</span>
                        </div>
                        <div className="detail clearfix">
                            <span className="date">价格：20元/人</span>
                            <span className="require">地点：<label>***村***街</label></span>
                            <span className="result">活动状态：<label>进行中</label></span>
                        </div>
						   <div className="detail clearfix">
                            <span className="date">联系人：张三</span>
                            <span className="require">联系方式：<label>157********</label></span>
                        </div>
                        <div className="org">
                            <span>活动内容：苹果成熟旺季，特邀广大朋友来到***村参加苹果采摘活动，活动火爆进行中，进园每人20元随便吃，出园带苹果20元/千克。</span>
                            <label className="green">详情</label>
                        </div>
                    </div>
                </div>
                 <div className="weui_cell" href="javascript:;">
                    <div className="weui_cell_bd weui_cell_primary">
                        <div className="wuliao-title">
                            <label>主题：</label>
                            <span>***村苹果采摘</span>
                        </div>
                        <div className="detail clearfix">
                            <span className="date">价格：20元/人</span>
                            <span className="require">地点：<label>***村***街</label></span>
                            <span className="result">活动状态：<label>进行中</label></span>
                        </div>
						   <div className="detail clearfix">
                            <span className="date">联系人：张三</span>
                            <span className="require">联系方式：<label>157********</label></span>
                        </div>
                        <div className="org">
                            <span>活动内容：苹果成熟旺季，特邀广大朋友来到***村参加苹果采摘活动，活动火爆进行中，进园每人20元随便吃，出园带苹果20元/千克。</span>
                            <label className="green">详情</label>
                        </div>
                    </div>
                </div>
                <div className="weui_cell" href="javascript:;">
                    <div className="weui_cell_bd weui_cell_primary">
                        <div className="wuliao-title">
                            <label>主题：</label>
                            <span>***村苹果采摘</span>
                        </div>
                        <div className="detail clearfix">
                            <span className="date">价格：20元/人</span>
                            <span className="require">地点：<label>***村***街</label></span>
                            <span className="result">活动状态：<label>进行中</label></span>
                        </div>
						   <div className="detail clearfix">
                            <span className="date">联系人：张三</span>
                            <span className="require">联系方式：<label>157********</label></span>
                        </div>
                        <div className="org">
                            <span>活动内容：苹果成熟旺季，特邀广大朋友来到***村参加苹果采摘活动，活动火爆进行中，进园每人20元随便吃，出园带苹果20元/千克。</span>
                            <label className="green">详情</label>
                        </div>
                    </div>
                </div>
            </div>
        </article>

    )
}

export default reduxForm({
    form: 'fieldLevelValidate'
})(FieldLevelValidate)









