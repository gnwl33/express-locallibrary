// const { Hidden, Drawer, IconButton, makeStyles } = MaterialUI;

// const useStyles = makeStyles({
//   paper: {
//     background: '#464646',
//     marginBottom: '20px',
//   },
//   hide: {
//     display: 'none',
//   },
// });

function Sidebar(props) {
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  // const classes = useStyles();
  // const { window } = props;
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <ul className="sidebar-nav">
      {/*
        mobileOpen && (
        <IconButton onClick={handleDrawerToggle}>
          <i className="material-icons" style={{ color: 'white' }}>
            chevron_left
          </i>
        </IconButton>)
      */}
      <li>
        <a href="/catalog">Home</a>
      </li>
      <li>
        <a href="/catalog/books">All books</a>
      </li>
      <li>
        <a href="/catalog/authors">All authors</a>
      </li>
      <li>
        <a href="/catalog/genres">All genres</a>
      </li>
      <li>
        <a href="/catalog/bookinstances">All book copies</a>
      </li>
      <hr />
      <li>
        <a href="/catalog/author/create">Create new author</a>
      </li>
      <li>
        <a href="/catalog/genre/create">Create new genre</a>
      </li>
      <li>
        <a href="/catalog/book/create">Create new book</a>
      </li>
      <li>
        <a href="/catalog/bookinstance/create">Create new book copy</a>
      </li>
    </ul>
  );

  return (
    /*
      <nav>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={mobileOpen ? classes.hide : ''}
        >
          <i className="material-icons">menu</i>
        </IconButton>
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.paper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.paper,
            }}
            variant="persistent"
            open
          >
    */
    drawer
    /*
          </Drawer>
        </Hidden>
      </nav>
    */
  );
}

ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
