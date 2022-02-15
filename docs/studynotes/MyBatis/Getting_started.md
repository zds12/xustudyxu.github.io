# MyBatis 入门案例

[[toc]]

## 下载

+ 下载地址

[地址](https://github.com/mybatis/mybatis-3/)

![1643960773306](./images/01/03.png)

##  HelloWorld简单版

### 创建表和javaBean

+ 创建一张测试表,并添加数据

```sql
CREATE TABLE tbl_employee(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	last_name VARCHAR(255),
	gender CHAR(1),
	email VARCHAR(255)
	)
INSERT INTO tbl_employee(last_name,gender,email) 
	VALUES('tom','0','tom123@qq.com')	
```

+ 创建对应的javaBean

```java
public class Employee {

    private Integer id;
    private String lastName;
    private String email;
    private String gender;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
}
```

+ 引入依赖

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.1</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>6.0.6</version>
</dependency>
```

+ 或者导入相关的jar包

![1643947378486](./images/01/04.png)



### 创建mybatis配置文件，sql映射文件

+ 创建mybatis配置文件mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/mybatis"/>
                <property name="username" value="root"/>
                <property name="password" value="hsp"/>
            </dataSource>
        </environment>
    </environments>
    <!--写好的sql映射文件(EmployeeMapper.xml)注册到全局配置文件(mybatis-config.xml)中-->
    <mappers>
        <mapper resource="EmployeeMapper.xml"/>
    </mappers>
</configuration>
```

+ sql映射文件EmployeeMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.frx01.mybatis.EmployeeMapper">
<!--namespace:名称空间
id:唯一标识
resultType:返回值类型
#{id}:从传递过来的参数中取出ID值
-->
    <select id="selectEmp" resultType="com.frx01.mybatis.bean.Employee">
        select id,last_name lastName,gender,email from tbl_employee where id=#{id}
    </select>
</mapper>
```

### 测试

```java
/**
 * @author frx
 * @version 1.0
 * @date 2022/2/4  11:54
 */
public class MyBatisTest {

    @Test
    public void test() throws IOException{
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        //2.获取sqlSession实例，能直接执行已经映射的sql语句
        SqlSession openSession = sqlSessionFactory.openSession();
        //第一个参数 sql语句的唯一标识符 第二个参数 执行sql 语句要用的参数
        try {
            Employee employee = openSession.selectOne("com.frx01.mybatis.EmployeeMapper.selectEmp", 1);
            System.out.println(employee);
        }finally {
            openSession.close();
        }
    }
}
```

![1643957558383](./images/01/01.png)

1. 根据xml配置文件(全局配置文件)创建一个SqlSessionFactory对象

2. sql映射文件。配置了每一个sql，以及sql的封装规则等

3. 将sql映射文件注册在全局配置文件中

4. 写代码

   1. 根据全局配置文件得到SqlSessionFactory

   2. 使用sqlSession工厂，获取到sqlSession对象使用他来执行增删改查

      一个sqlSession就是代表和数据库的一次会话，用完关闭

   3. 使用sql的唯一标识来告诉MyBatis执行哪个sql，sql都是保存在sql映射文件中的

## 接口式编程

### 创建一个dao接口

```java
/**
 * @author frx
 * @version 1.0
 * @date 2022/2/4  14:59
 */
public interface EmployeeMapper {

    public Employee getEmpById(Integer id);
}

```

### 修改Mapper文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.frx01.mybatis.dao.EmployeeMapper">
<!--namespace:名称空间；指定为接口的全类名
id:唯一标识
resultType:返回值类型
#{id}:从传递过来的参数中取出ID值
public Employee getEmpById(Integer id);
-->
    <select id="getEmpById" resultType="com.frx01.mybatis.bean.Employee">
        select id,last_name lastName,gender,email from tbl_employee where id=#{id}
    </select>
</mapper>
```

### 测试

```java
public class MyBatisTest{

    public SqlSessionFactory getSqlSessionFactory() throws IOException{
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        return new SqlSessionFactoryBuilder().build(inputStream);

    }
    @Test
    public void test01() throws IOException {
        //1.获取sqlSessionFactory对象
        SqlSessionFactory sqlSessionFactory = getSqlSessionFactory();

        //2.获取sqlSession对象
        SqlSession openSession = sqlSessionFactory.openSession();

        try {
            //3.获取接口的实现类对象
            //会为接口自动的创建一个代理对象，代理对象去执行增删改查方法
            EmployeeMapper mapper = openSession.getMapper(EmployeeMapper.class);
            Employee employee = mapper.getEmpById(1);
            System.out.println(mapper.getClass());
            System.out.println(employee);
        }finally {
            openSession.close();
        }
    }
}
```

![1643959058705](./images/01/02.png)

1. 接口式编程

 * 原生:       Dao      ====>  DaoImpl

 * mybatis:   Mapper   ====>  xxMapper.xml

2. SqlSession代表和数据库的**一次会话**,**用完必须关闭**。

3. **SqlSession**和connection一样都是**非线程安全**。每次使用都获取新的对象。

4. mapper接口没有实现类，但是**mybatis会为这个接口生成一个代理对象**。

   > 将接口与xml进行绑定

```java
EmployeeMapper empMapper = sqlSession.getMapper(EmployeeMapper.class);
```

5. 两个重要的配置文件

 * mybatis的全局配置文件:包含数据库连接池信息，事务管理器信息等。。系统运行环境信息

 * sql映射文件:**保存了每一个sql语句的映射信息**:

   > **将sql抽取出来**

