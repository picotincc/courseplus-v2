export default class HomeService
{
    static _instance = null;

    static getInstance()
    {
        if (HomeService._instance === null)
        {
            HomeService._instance = new HomeService();
        }
        return HomeService._instance;
    }

    getGoodCourses()
    {
        const url = "http://127.0.0.1:8888/comments";
        return new Promise((resolve, reject) => {
            fetch(url, {
              method: "GET"
            }).then(function(response) {
                const text = response.json();
                resolve(text);
            });
        });
    }
}
