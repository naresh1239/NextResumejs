


 export const UsecustomCss = (data) =>{
    const styles = {
      container: {
        maxWidth: '850px',
        minHeight : '90vh',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: `${data?.backgroundColor}`,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: `${data?.FontColor}`,
      },
      header: {
        textAlign: 'center',
        paddingBottom: '15px',
        borderBottom: `3px solid ${data.themeColor}`,
      },
      name: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: data.themeColor,
        margin: '0',
      },
      jobTitle: {
        fontSize: '20px',
        color: '#555',
        fontWeight: '500',
      },
      contactInfo: {
        color: '#777',
        fontSize: '15px',
        marginTop: '8px',
      },
      sectionTitle: {
        color: data.themeColor,
        fontSize: '24px',
        fontWeight: 'bold',
        borderBottom: `1px solid ${data.themeColor}`,
        paddingBottom: '5px',
        margin: '20px 0 10px 0',
      },
      summary: {
        marginTop: '20px',
        lineHeight: '1.6',
        fontSize: '16px',
        color: '#555',
      },
      listItem: {
        padding: '15px 0',
        // borderBottom: '1px solid #e0e0e0',
        fontSize: '16px',
        color: '#444',
      },
      skillRating: {
        background: '#e0e0e0',
        borderRadius: '5px',
        overflow: 'hidden',
        marginTop: '5px',
        height: '10px',
        width: '100%',
      },
      skillFill: (width) => ({
        background: data.themeColor,
        width: `${width}%`,
        height: '10px',
      }),
    };

    return styles;
  }