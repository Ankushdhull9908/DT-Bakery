import React from 'react'

function AdminDashboard() {
    const stats = [
    { id: 1, label: 'Total Revenue', value: '$45,285', growth: '+12.5%', color: 'green' },
    { id: 2, label: 'Active Users', value: '12,402', growth: '+8.2%', color: 'blue' },
    { id: 3, label: 'New Signups', value: '1,205', growth: '-3.1%', color: 'red' },
    { id: 4, label: 'Conversion Rate', value: '4.2%', growth: '+1.4%', color: 'purple' },
  ];

  return (
    <main className="main-content">
        <header className="top-nav">
          <h1>Dashboard Overview</h1>
          <div className="user-profile">
            <span>John Doe</span>
            <div className="avatar">JD</div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <p className="stat-label">{stat.label}</p>
              <h2 className="stat-value">{stat.value}</h2>
              <span className={`stat-growth ${stat.color}`}>{stat.growth}</span>
            </div>
          ))}
        </section>

        {/* Recent Activity Table */}
        <section className="table-container">
          <h3>Recent Transactions</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice Freeman</td>
                <td><span className="badge success">Completed</span></td>
                <td>Oct 24, 2025</td>
                <td>$350.00</td>
              </tr>
              <tr>
                <td>Mark Ruffalo</td>
                <td><span className="badge pending">Pending</span></td>
                <td>Oct 23, 2025</td>
                <td>$1,200.00</td>
              </tr>
              <tr>
                <td>Sarah Jenkins</td>
                <td><span className="badge success">Completed</span></td>
                <td>Oct 22, 2025</td>
                <td>$85.50</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
  )
}

export default AdminDashboard
