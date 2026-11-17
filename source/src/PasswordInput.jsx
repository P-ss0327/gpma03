import { useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';

export function PasswordInput({ type: _type, ...props }) {
  const [visible, setVisible] = useState(false);
  const label = props['aria-label'] || '密码';
  return <span className="password-input-control">
    <input {...props} type={visible ? 'text' : 'password'} />
    <button type="button" className="password-visibility-toggle" aria-label={`${visible ? '隐藏' : '显示'}${label}`} aria-pressed={visible} onClick={() => setVisible(value => !value)}>
      {visible ? <EyeSlash size={20} aria-hidden="true" /> : <Eye size={20} aria-hidden="true" />}
    </button>
  </span>;
}
