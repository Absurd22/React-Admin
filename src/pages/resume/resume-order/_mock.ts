import type { Request, Response } from 'express';

const basicGoods = [
  {
    id: '1234561',
    name: '模版1',
    price: '100.00',
    num: '1',
    amount: '100.00',
  },
  {
    id: '1234562',
    name: '模版2-实习版',
    price: '60.00',
    num: '2',
    amount: '120.00',
  },
  {
    id: '1234563',
    name: '模版3-校招版',
    price: '49.00',
    num: '1',
    amount: '49.00',
  },
  {
    id: '1234564',
    name: '模版4',
    price: '79.00',
    num: '2',
    amount: '158.00',
  },
];

const basicProgress = [
  {
    key: '1',
    time: '2022-05-21 14:10',
    rate: '对接客户',
    status: 'processing',
    operator: '玉梅老师',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2022-05-21 18:00',
    rate: '指导简历修改',
    status: 'processing',
    operator: 'suchao老师',
    cost: '1h',
  },
  {
    key: '3',
    time: '2022-05-21 14:10',
    rate: '简历修改',
    status: 'processing',
    operator: '达菲老师',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2022-05-21 19:10',
    rate: '修改完成',
    status: 'success',
    operator: '政楠老师',
    cost: '1h',
  },
  {
    key: '5',
    time: '2022-05-21 16:10',
    rate: '修改完成',
    status: 'success',
    operator: '伊始老师',
    cost: '5mins',
  },
];

function getProfileBasic(_: Request, res: Response) {
  return res.json({
    data: {
      basicProgress,
      basicGoods,
    },
  });
}

export default {
  'GET  /api/profile/basic': getProfileBasic,
};
