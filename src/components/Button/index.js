const Button = (props) => {
    const { status, onClick, children } = props;

    let statusClass = {
        'active': 'btn-primary',
        'idle': 'btn-secondary',
        'success': 'btn-success',
        'disabled': 'btn-secondary'
    }
    const btnClass = statusClass[status];
    const disabled = status === 'disabled' ? true : false;

    return (
        <button className={`btn ${btnClass}`} disabled={disabled} onClick={onClick}>{children}</button>
    );
}

export default Button;