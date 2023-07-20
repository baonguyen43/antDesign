/* eslint-disable consistent-return */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Row, Col, CardBody, Card, Container, Form,
  Input, FormFeedback, Label,
} from 'reactstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import images from 'assets/images';
import { locations, storageKey, textLengthLimit } from 'constants/index';
import {
  validationErrorHandler,
  getPlaceholderTrans,
  checkHadError,
} from 'utils';
import propTypeModels from 'propTypeModels';

import Meta from 'Layout/Meta';
import LanguageDropdown from 'Layout/AuthLayout/TopbarDropdown/LanguageDropdown';
import AppButtonLoading from 'components/AppButtonLoading';

const Login = (props) => {
  const {
    loading,

    me,
    error,

    actionLogin,
  } = props;

  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    if (me._id) return history.push(locations.HOME_PAGE);
  }, [me._id]);

  useEffect(() => {
    if (Object.keys(error).length) {
      validation.setErrors({
        ...error,
      });
    }
  }, [error]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      organizationID: '',
      username: '',
      password: '',
    },

    validationSchema: Yup.object({
      organizationID: Yup.string()
        .required({
          type: 'is_required',
          name: 'organization_code',
        })
        .trim()
        .max(textLengthLimit.SHORT, {
          type: 'max_length',
          name: 'organization_code',
          number: textLengthLimit.SHORT,
        }),

      username: Yup.string()
        .required(({
          type: 'is_required',
          name: 'username',
        }))
        .trim()
        .max(textLengthLimit.SHORT, {
          type: 'max_length',
          name: 'username',
          number: textLengthLimit.SHORT,
        }),

      password: Yup.string()
        .required(({
          type: 'is_required',
          name: 'password',
        }))
        .trim()
        .min(textLengthLimit.PASSWORD, {
          type: 'min_length',
          name: 'password',
          number: textLengthLimit.PASSWORD,
        }),
    }),

    onSubmit: (values) => {
      actionLogin({ user: values, history });
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    validation.handleSubmit();
  }, []);

  const onChangePasswordInput = useCallback((e) => {
    if (e.currentTarget.value.includes(' ')) {
      e.currentTarget.value = e.currentTarget.value.replace(/\s/g, '');
    }

    validation.setValues((prevState) => ({
      ...prevState,
      password: e.currentTarget.value,
    }));
  }, []);

  const onKeyDownPasswordInput = useCallback((value) => {
    if (value.key === ' ') {
      value.preventDefault();
    }
  }, []);

  const token = localStorage.getItem(storageKey.AUTHENTICATE_TOKEN);

  useEffect(() => {
    if (token) {
      history.push(locations.DASHBOARD);
    }
  }, [token]);

  const [isShowPassWord, setIsShowPassWord] = useState(true);

  const onToggleShow = useCallback(() => {
    setIsShowPassWord(!isShowPassWord);
  }, []);

  const validationErrors = useMemo(() => validation.errors, [validation.errors]);

  return (
    <>
      <Meta name="login.title" />

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-3">
                        <h5 className="text-primary">{t('login.welcome_back')}</h5>
                        <p>{t('login.description')}</p>
                      </div>
                    </Col>

                    <Col className="col-5 align-self-end">
                      <img src={images.profile.default} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>

                <CardBody className="pt-0">
                  <div>
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src={images.logo.default}
                          alt=""
                          className="rounded-circle"
                          height="34"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={onSubmit}
                    >
                      <div className="mb-3">
                        <Label className="form-label">{t('organization_code')}</Label>
                        <Input
                          name="organizationID"
                          className="form-control"
                          placeholder={getPlaceholderTrans({
                            type: 'type.ENTER',
                            name: 'organization_code',
                          })}
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.organizationID || ''}
                          invalid={checkHadError(validation, 'organizationID')}
                        />

                        {checkHadError(validation, 'organizationID') && (
                          <FormFeedback type="invalid">
                            {
                            validationErrorHandler(validationErrors.organizationID)
                            }

                          </FormFeedback>
                        )}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">{t('username')}</Label>
                        <Input
                          name="username"
                          className="form-control"
                          placeholder={getPlaceholderTrans({
                            type: 'type.ENTER',
                            name: 'username',
                          })}
                          type="username"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ''}
                          invalid={checkHadError(validation, 'username')}
                        />

                        {checkHadError(validation, 'username') && (
                          <FormFeedback type="invalid">
                            {
                              validationErrorHandler(validationErrors.username)
                            }
                          </FormFeedback>
                        )}
                      </div>

                      <div className="mb-3 position-relative">
                        <Label className="form-label">{t('password')}</Label>
                        <Input
                          className="password_type"
                          name="password"
                          value={validation.values.password || ''}
                          type={isShowPassWord ? 'password' : 'text'}
                          placeholder={getPlaceholderTrans({
                            type: 'type.ENTER',
                            name: 'password',
                          })}
                          onChange={onChangePasswordInput}
                          onKeyDown={onKeyDownPasswordInput}
                          onBlur={validation.handleBlur}
                          invalid={checkHadError(validation, 'password')}
                        />

                        <i
                          className={`font-size-18 show_password fas ${!isShowPassWord ? 'fa-eye-slash' : 'fa-eye'}`}
                          onClick={onToggleShow}
                          aria-hidden="true"
                        />

                        {checkHadError(validation, 'password') && (
                          <FormFeedback type="invalid">
                            {
                              validationErrorHandler(validationErrors.password)
                            }
                          </FormFeedback>
                        )}
                      </div>

                      <div className="mt-3 d-grid">
                        {
                          loading ? <AppButtonLoading /> : (
                            <button
                              disabled={loading}
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              {t('login.title')}
                            </button>
                          )
                        }
                      </div>

                      <div className="mt-4 text-center">
                        <Link to={locations.LOGIN} className="fw-medium  text-primary">
                          <i className="bx bx-user me-1" />
                          {t('login.login_as_administrator')}
                        </Link>
                      </div>

                      <div className="mt-4 text-center d-flex justify-content-between align-items-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          {t('login.forgot_password')}
                        </Link>

                        <LanguageDropdown />
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  Dashment.
                  {' '}
                  {t('login.developed')}
                  {' '}
                  <i className="mdi mdi-heart text-danger" />
                  {' '}
                  {t('login.by')}
                  {' '}
                  Wiicamp
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,

  me: propTypeModels.user.userPropTypes.isRequired,
  error: PropTypes.instanceOf(Object).isRequired,

  actionLogin: PropTypes.func.isRequired,
};

export default Login;
