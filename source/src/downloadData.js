import { applicationTypes } from './applicationConfig.js';
// Demo records and real demo attachments only; replace through the same schema for production.
export const downloadCategories = ["全部资料", "申请表格", "通知文件", "政策文件"];
export const downloadFiles = [
  {
    "id": 1,
    "title": "2026年度广东省项目管理协会科技奖申报材料模板",
    "category": "申请表格",
    "tags": [
      "科技奖申报"
    ],
    "date": "2026-10-18T13:57:18",
    "url": "/demo-downloads/gpma-demo-01.txt",
    "filename": "演示-2026年度广东省项目管理协会科技奖申报材料模板.txt",
    "size": "0.7 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 2,
    "title": "优秀项目管理单位申报表（2026年度）",
    "category": "申请表格",
    "tags": [
      "申报表",
      "评优申报",
      "优秀单位"
    ],
    "date": "2026-10-12T09:24:36",
    "url": "/demo-downloads/gpma-demo-02.txt",
    "filename": "演示-优秀项目管理单位申报表（2026年度）.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 3,
    "title": "项目管理行业调研数据表",
    "category": "申请表格",
    "tags": [
      "调研"
    ],
    "date": "2026-09-28T16:20:11",
    "url": "/demo-downloads/gpma-demo-03.txt",
    "filename": "演示-项目管理行业调研数据表.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 4,
    "title": "广东省项目管理协会团体标准编制指南（试行）",
    "category": "政策文件",
    "tags": [
      "团体标准"
    ],
    "date": "2026-09-20T10:08:52",
    "url": "/demo-downloads/gpma-demo-04.txt",
    "filename": "演示-广东省项目管理协会团体标准编制指南（试行）.txt",
    "size": "0.7 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 5,
    "title": "协会标识使用通知及附件资料包",
    "category": "通知文件",
    "tags": [
      "宣传"
    ],
    "date": "2026-09-15T14:33:27",
    "url": "/demo-downloads/gpma-demo-05.zip",
    "filename": "演示-协会标识使用通知及附件资料包.zip",
    "size": "0.6 KB",
    "type": "ZIP",
    "canPreview": false
  },
  {
    "id": 6,
    "title": "专家入库申请材料清单",
    "category": "申请表格",
    "tags": [
      "专家申请",
      "专家入库"
    ],
    "date": "2026-09-10T11:09:03",
    "url": "/demo-downloads/gpma-demo-06.txt",
    "filename": "演示-专家入库申请材料清单.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 7,
    "title": "关于开展科技奖申报工作的通知",
    "category": "通知文件",
    "tags": [
      "科技奖申报"
    ],
    "date": "2026-08-30T09:17:45",
    "url": "/demo-downloads/gpma-demo-07.txt",
    "filename": "演示-关于开展科技奖申报工作的通知.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 8,
    "title": "项目管理培训资料领取说明",
    "category": "通知文件",
    "tags": [
      "培训资料",
      "培训通知"
    ],
    "date": "2026-08-21T09:00:00",
    "url": "/demo-downloads/gpma-demo-08.txt",
    "filename": "演示-项目管理培训资料领取说明.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 9,
    "title": "入会申请材料准备指南",
    "category": "申请表格",
    "tags": [
      "入会材料",
      "入会申请"
    ],
    "date": "2025-11-20T09:00:00",
    "url": "/demo-downloads/gpma-demo-09.txt",
    "filename": "演示-入会申请材料准备指南.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 10,
    "title": "团体标准立项申请表",
    "category": "申请表格",
    "tags": [
      "团体标准"
    ],
    "date": "2025-10-18T09:00:00",
    "url": "/demo-downloads/gpma-demo-10.txt",
    "filename": "演示-团体标准立项申请表.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 11,
    "title": "项目管理相关政策文件汇编目录",
    "category": "政策文件",
    "tags": [
      "政策"
    ],
    "date": "2025-09-16T09:00:00",
    "url": "/demo-downloads/gpma-demo-11.txt",
    "filename": "演示-项目管理相关政策文件汇编目录.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 12,
    "title": "协会会员信息变更登记表",
    "category": "申请表格",
    "tags": [
      "会员",
      "入会申请"
    ],
    "date": "2025-08-15T09:00:00",
    "url": "/demo-downloads/gpma-demo-12.txt",
    "filename": "演示-协会会员信息变更登记表.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 13,
    "title": "科技奖申报材料填写说明",
    "category": "申请表格",
    "tags": [
      "科技奖申报"
    ],
    "date": "2025-07-10T09:00:00",
    "url": "/demo-downloads/gpma-demo-13.txt",
    "filename": "演示-科技奖申报材料填写说明.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 14,
    "title": "关于优秀项目管理单位申报材料报送的通知",
    "category": "通知文件",
    "tags": [
      "评优申报",
      "优秀单位"
    ],
    "date": "2025-06-08T09:00:00",
    "url": "/demo-downloads/gpma-demo-14.txt",
    "filename": "演示-关于优秀项目管理单位申报材料报送的通知.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 15,
    "title": "团体标准征求意见反馈表",
    "category": "申请表格",
    "tags": [
      "团体标准"
    ],
    "date": "2025-05-06T09:00:00",
    "url": "/demo-downloads/gpma-demo-15.txt",
    "filename": "演示-团体标准征求意见反馈表.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 16,
    "title": "关于专家入库申请材料报送的通知",
    "category": "通知文件",
    "tags": [
      "专家入库",
      "专家申请"
    ],
    "date": "2025-04-02T09:00:00",
    "url": "/demo-downloads/gpma-demo-16.txt",
    "filename": "演示-关于专家入库申请材料报送的通知.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 17,
    "title": "建设工程政策法规资料目录",
    "category": "政策文件",
    "tags": [
      "政策"
    ],
    "date": "2024-12-18T09:00:00",
    "url": "/demo-downloads/gpma-demo-17.txt",
    "filename": "演示-建设工程政策法规资料目录.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 18,
    "title": "协会年度工作文件目录",
    "category": "通知文件",
    "tags": [
      "工作"
    ],
    "date": "2024-11-15T09:00:00",
    "url": "/demo-downloads/gpma-demo-18.txt",
    "filename": "演示-协会年度工作文件目录.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 19,
    "title": "专家申请信息登记表",
    "category": "申请表格",
    "tags": [
      "专家申请",
      "专家入库"
    ],
    "date": "2024-10-10T09:00:00",
    "url": "/demo-downloads/gpma-demo-19.txt",
    "filename": "演示-专家申请信息登记表.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 20,
    "title": "入会材料及单位信息登记表",
    "category": "申请表格",
    "tags": [
      "入会材料",
      "入会申请"
    ],
    "date": "2024-09-08T09:00:00",
    "url": "/demo-downloads/gpma-demo-20.txt",
    "filename": "演示-入会材料及单位信息登记表.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 21,
    "title": "关于领取项目管理培训课程资料的通知",
    "category": "通知文件",
    "tags": [
      "培训资料",
      "培训通知"
    ],
    "date": "2024-08-06T09:00:00",
    "url": "/demo-downloads/gpma-demo-21.txt",
    "filename": "演示-关于领取项目管理培训课程资料的通知.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 22,
    "title": "团体标准宣贯材料目录",
    "category": "政策文件",
    "tags": [
      "团体标准"
    ],
    "date": "2024-07-05T09:00:00",
    "url": "/demo-downloads/gpma-demo-22.txt",
    "filename": "演示-团体标准宣贯材料目录.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 23,
    "title": "协会活动宣传资料使用说明",
    "category": "通知文件",
    "tags": [
      "宣传"
    ],
    "date": "2024-06-03T09:00:00",
    "url": "/demo-downloads/gpma-demo-23.txt",
    "filename": "演示-协会活动宣传资料使用说明.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  },
  {
    "id": 24,
    "title": "科技奖评选政策材料目录",
    "category": "政策文件",
    "tags": [
      "资料",
      "科技奖申报"
    ],
    "date": "2024-05-01T09:00:00",
    "url": "/demo-downloads/gpma-demo-24.txt",
    "filename": "演示-科技奖评选政策材料目录.txt",
    "size": "0.6 KB",
    "type": "TXT",
    "canPreview": true
  }
];

// Illustrative permissions only; association must confirm the production policy.
export const memberOnlyIds = [1, 2, 3, 7, 12, 13, 14, 16, 18, 21, 22, 24];
for (const file of downloadFiles) file.access = memberOnlyIds.includes(file.id) ? 'member' : 'public';

// Reuse the same file records for inline application downloads and the library.
for (const file of downloadFiles) file.templateFor = Object.entries(applicationTypes).filter(([type, config]) => type !== 'excellence' && config.templateId === file.id).map(([type])=>type);
