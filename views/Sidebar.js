'use strict';

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
  var drawer = /*#__PURE__*/ React.createElement(
    'ul',
    {
      className: 'sidebar-nav',
    },
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog',
        },
        'Home'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/books',
        },
        'All books'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/authors',
        },
        'All authors'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/genres',
        },
        'All genres'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/bookinstances',
        },
        'All book copies'
      )
    ),
    /*#__PURE__*/ React.createElement('hr', null),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/author/create',
        },
        'Create new author'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/genre/create',
        },
        'Create new genre'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/book/create',
        },
        'Create new book'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'li',
      null,
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '/catalog/bookinstance/create',
        },
        'Create new book copy'
      )
    )
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

ReactDOM.render(
  /*#__PURE__*/ React.createElement(Sidebar, null),
  document.getElementById('sidebar')
);
