// Local preview accounts must also work on ordinary HTTP LAN addresses.
export async function authenticatePreview(account, password, accounts, digestPassword) {
  const name = account.trim();
  const statuses = { member: 'active', user: 'registered', pending: 'pending' };
  const registered = accounts[name];
  if (statuses[name] && password === 'demo1234') {
    return {name, unit: registered?.unit || '演示单位', profile: registered?.profile || {}, identity: 'personal', status: statuses[name]};
  }
  if (!registered?.hash) return null;
  const hash = await digestPassword(password);
  return hash === registered.hash ? {name, unit: registered.unit, identity: registered.identity || 'personal', profile: registered.profile || {}, status: registered.status || 'registered'} : null;
}
