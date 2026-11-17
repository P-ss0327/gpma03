import { previewTarget } from './filePreview.js';
import { FileText, Eye, DownloadSimple } from '@phosphor-icons/react';

export function DownloadFileRow({ file, onPreview, onDownload }) {
  const previewable = Boolean(previewTarget(file));
  return <li className="dl-file-row">
    <span className="dl-file-icon" aria-hidden="true"><FileText size={39} weight="fill" /></span>
    <div className="dl-file-copy"><h2>{previewable
      ? <button type="button" onClick={() => onPreview(file)}>{file.title}</button>
      : <button type="button" onClick={() => onDownload(file)}>{file.title}</button>}
    </h2><div className="dl-file-meta"><span className="dl-category">{file.category}</span>{file.templateFor?.length ? <span className="dl-member-badge">申请模板</span> : file.access === 'member' && <span className="dl-member-badge">会员专享</span>}<time dateTime={file.date}>{file.date.replace('T', ' ')}</time></div></div>
    <div className="dl-actions">{previewable && <button type="button" className="dl-action" aria-label={`预览：${file.title}`} onClick={() => onPreview(file)}><Eye size={19} />预览</button>}
      <button type="button" className="dl-action dl-download-action" aria-label={`下载：${file.title}`} onClick={() => onDownload(file)}><DownloadSimple size={19} />下载</button>
    </div>
  </li>;
}
