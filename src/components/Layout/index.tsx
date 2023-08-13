import { IStatusColumn } from "../../interface/StatusColumn"
import StatusColumn from "../StatusColumn"
import './style.scss'
function Layout() {
    const columns: Array<IStatusColumn> = [
        {
            id: 1,
            title: 'Ready for dev',
            todos: [
                {
                    id: 1,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 89,
                    completionText: "8 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 12,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 67,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 12,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 67,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
            ]
        },
        {
            id: 2,
            title: 'In progress',
            todos: [
                {
                    id: 10,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 56,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 11,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 30,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 1,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 27,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'Client Review',
            todos: [
                {
                    id: 4,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 67,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 13,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 67,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 14,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 67,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 67,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 6,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 67,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: 'Done',
            todos: [
                {
                    id: 7,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 100,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 8,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 100,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 9,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 100,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                },
                {
                    id: 12,
                    title: "Sign up flow",
                    description: "Show email company name, full name, date of birth.",
                    status: "inDev",
                    completionPercentage: 100,
                    completionText: "7 hours left",
                    avatars: [
                        {
                            id: 1,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
                        },
                        {
                            id: 2,
                            fullname: "Ahmet ÇAKIR",
                            photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
                        }
                    ]
                }
            ]
        },
    ]

    return (
        <div className="container">
            {columns.map(col => {
                return <StatusColumn key={`col-${col.id}`} column={col} />
            })}
        </div>
    )
}

export default Layout
