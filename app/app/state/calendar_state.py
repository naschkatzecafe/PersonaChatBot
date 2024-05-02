import reflex as rx
from app.app_state import AppState
import datetime
import calendar

cal = calendar.Calendar()


# class_State 분리
# 캘린더 UI, 연도, 월, 선택된 날짜, 캘린더 그리드 데이터 관리하는 클래스
class State(rx.State):
    year: int = datetime.datetime.now().year  # 연도 저장
    month: int = datetime.datetime.now().month  # 표시할 월 저장

    # calendar_data: list[list[str]]  # 데이터 저장 변수

    # 현재 선택된 날짜를 저장하는 변수 지정, 선택전에는 None 상태
    selected_date: str | None = None  # Add to track selected date
    # 날짜 변경시 호출되는 콜백함수 저장
    _on_change = None

    # 날짜 선택되었을 때 호출되는 메서드
    def select_date(self, date: str) -> None:
        self.selected_date = date
        # if self._on_change:
        #     self._on_change(date)
        # self.get_calendar_data()        # 함수 호출해 선택된 날짜 반영하여 캘린더 그리드 재 생성

    # 캘린더 그리드의 데이터 초기화
    def clear_calendar_grid(self):
        self.calendar_data = []

    # 그리드를 채우는 방법 정의
    # python의 calendar 모듈 활용하여 선택된 연도와 월에 대한 캘린더 데이터 생성
    @rx.var
    def calendar_data(self) ->list[list[str]]:
        calendar_data = []
        for week in cal.monthdayscalendar(
            self.year, self.month
        ):  # 월별 일정 데이터 가져온다
            temp_list: list = []
            for day in week:
                if day == 0:
                    temp_list.append([" ", "none"])
                elif str(day) == self.selected_date:
                    temp_list.append([str(day), "rgba(0, 255, 0, 0.05)"])
                else:
                    temp_list.append([str(day), "rgba(255, 255, 255, 0.05)"])

            calendar_data.append(temp_list)
        return calendar_data

    # define month classes as per Python calendar module
    month_class: dict[int, str] = {
        1: "1월",
        2: "2월",
        3: "3월",
        4: "4월",
        5: "5월",
        6: "6월",
        7: "7월",
        8: "8월",
        9: "9월",
        10: "10월",
        11: "11월",
        12: "12월",
    }

    # define days of the week
    date_class: dict[int, str] = {
        0: "월",
        1: "화",
        2: "수",
        3: "목",
        4: "금",
        5: "토",
        6: "일",
    }

    # define method to change month (and year)
    # 이전달 또는 다음달로 이동하는 기능을 수행
    def delta_calendar(self, delta: int):
        if delta == 1:
            if (
                self.month + delta > 12
            ):  # # 12월을 넘어가면, 연도를 +1하고, 월을 1로 설정
                self.month = 1
                self.year += 1
            else:
                self.month += 1

        # 1월 이전이면, 연도를 -1하고, 월을 12로 설정
        if delta == -1:
            if self.month + delta < 1:
                self.month = 12
                self.year -= 1
            else:
                self.month -= 1

        self.clear_calendar_grid()
        # self.get_calendar_data()