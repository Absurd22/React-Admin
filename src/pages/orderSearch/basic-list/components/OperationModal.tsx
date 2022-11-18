import type { FC } from 'react';
import {
  ModalForm,
  ProFormSelect,
  ProFormDateTimePicker,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import type { BasicListItemDataType } from '../data.d';
import styles from '../style.less';
import { Button, Result } from 'antd';

type OperationModalProps = {
  done: boolean;
  visible: boolean;
  current: Partial<BasicListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: BasicListItemDataType) => void;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { done, visible, current, onDone, onSubmit, children } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<BasicListItemDataType>
      visible={visible}
      title={done ? null : `任务${current ? '编辑' : '添加'}`}
      className={styles.standardListForm}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done ? null : dom),
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done ? { padding: '72px 0' } : {},
      }}
    >
      {!done ? (
        <>
          <ProFormText
            name="title"
            label="订单名称(订单类型+客户姓名)"
            rules={[{ required: true, message: '请输入任务名称' }]}
            placeholder="请输入"
          />
          <ProFormDateTimePicker
            name="createdAt"
            label="开始时间"
            rules={[{ required: true, message: '请选择开始时间' }]}
            fieldProps={{
              style: {
                width: '100%',
              },
            }}
            placeholder="请选择"
          />
          <ProFormSelect
            name="owner"
            label="订单负责人"
            rules={[{ required: true, message: '请选择任务负责人' }]}
            options={[
              {
                label: '马玉梅',
                value: '玉梅老师',
              },
              {
                label: '苏超',
                value: 'Spencer老师',
              },
              {
                label: '马政楠',
                value: '政楠老师',
              },
            ]}
            placeholder="请选择管理员"
          />
          <ProFormTextArea
            name="subDescription"
            label="订单描述"
            rules={[{ message: '请输入至少十个字符的客户描述！', min: 5 }]}
            placeholder="请输入十个字符"
          />
        </>
      ) : (
        <Result
          status="success"
          title="操作成功"
          subTitle="订单提交成功，小优提醒您：劳逸结合，注意身体哦！"
          extra={
            <Button type="primary" onClick={onDone}>
              知道了
            </Button>
          }
          className={styles.formResult}
        />
      )}
    </ModalForm>
  );
};

export default OperationModal;
