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
		
            <div className="list-wrap">
                <h4>功能大全</h4>
                <ul className="app-list">
				 <li>
                        <div className="app-wrap">
                            <Link to="/TravelIndex">
                                <i className="iconfont">&#xe626;</i>
                                <span>旅游最新动态</span>
                            </Link>
                        </div>
                        
                    </li>
                    <li>
                        <div className="app-wrap">
                              <Link to="javascript:;">
                                <i className="iconfont">&#xe647;</i>
                                <span>汽车信息发布</span>
                             </Link>
                        </div>
                        
                    </li>
                    <li>
                        <div className="app-wrap">
                             <Link to="javascript:;">
                                <i className="iconfont">&#xe624;</i>
                                <span>顾客需求发布</span>
                             </Link>
                        </div>
                        
                    </li>
                    
                </ul>
            </div>

            <div className="list-wrap">
                <h4>零担货运</h4>
                <ul className="app-list">
				  <li>
                        <div className="app-wrap">
                              <Link to="javascript:;">
                                <i className="iconfont">&#xe649;</i>
                                <span>货运最新动态</span>
                             </Link>
                        </div>
                        
                    </li>
                    <li>
                        <div className="app-wrap">
                             <Link to="javascript:;">
                                <i className="iconfont">&#xe64b;</i>
                                <span>货车信息发布</span>
                            </Link>
                        </div>
                        
                    </li>
					
                    <li>
                        <div className="app-wrap">
                              <Link to="javascript:;">
                                <i className="iconfont">&#xe644;</i>
                                <span>发货需求发布</span>
                             </Link>
                        </div>
                        
                    </li>
                  
                  
                </ul>
            </div>

            <div className="list-wrap">
                <h4>广告发布</h4>
                <ul className="app-list">
				 <li>
                        <div className="app-wrap">
                             <Link to="javascript:;">
                                <i className="iconfont">&#xe64a;</i>
                                <span>广告登记</span>
                            </Link>
                        </div>
                        
                    </li>
                    <li>
                        <div className="app-wrap">
                              <Link to="javascript:;">
                                <i className="iconfont">&#xe620;</i>
                                <span>招工广告</span>
                             </Link>
                        </div>
                        
                    </li>
                    <li>
                        <div className="app-wrap">
                              <Link to="javascript:;">
                                <i className="iconfont">&#xe648;</i>
                                <span>旅游广告</span>
                            </Link>
                        </div>
                        
                    </li>
                    <li>
                        <div className="app-wrap">
                             <Link to="javascript:;">
                                <i className="iconfont">&#xe646;</i>
                                <span>其他</span>
                            </Link>
                        </div>
                        
                    </li>
					 
                </ul>
            </div>
        </article>
    )
}

export default reduxForm({
    form: 'fieldLevelValidate'
})(FieldLevelValidate)









